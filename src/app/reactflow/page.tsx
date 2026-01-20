"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  type Connection,
  type Edge,
  type Node,
  type ReactFlowInstance,
} from "reactflow"
import "reactflow/dist/style.css"

type FlowDoc = { nodes: Node[]; edges: Edge[] }

const MIN_DISTANCE = 150 // similar al ejemplo Proximity Connect :contentReference[oaicite:2]{index=2}

const initialNodes: Node[] = [
  { id: "1", position: { x: 80, y: 80 }, data: { label: "Nodo 1" } },
  { id: "2", position: { x: 360, y: 200 }, data: { label: "Nodo 2" } },
]

const initialEdges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }]

// Distancia Euclidiana (en coordenadas del flow)
function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  const dx = a.x - b.x
  const dy = a.y - b.y
  return Math.sqrt(dx * dx + dy * dy)
}

function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)

  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [rf, setRf] = useState<ReactFlowInstance | null>(null)

  // IDs incrementales correctos
  const nextIdRef = useRef<number>(3)
  useEffect(() => {
    const max = nodes.reduce((acc, n) => {
      const num = Number.parseInt(String(n.id), 10)
      return Number.isFinite(num) ? Math.max(acc, num) : acc
    }, 0)
    nextIdRef.current = Math.max(nextIdRef.current, max + 1)
  }, [nodes])

  // JSON en vivo
  const [liveJSON, setLiveJSON] = useState("")
  useEffect(() => {
    const doc: FlowDoc = { nodes, edges }
    setLiveJSON(JSON.stringify(doc, null, 2))
  }, [nodes, edges])

  // Conexión manual (arrastrar handle -> handle)
  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) =>
        addEdge(
          {
            ...connection,
            id: `e-${connection.source}-${connection.target}-${Date.now()}`,
          },
          eds
        )
      )
    },
    [setEdges]
  )

  const fit = useCallback(() => {
    rf?.fitView({ padding: 0.2, duration: 300 })
  }, [rf])

  const addNode = useCallback(() => {
    if (!rf || !wrapperRef.current) return

    const id = String(nextIdRef.current++)

    // Centro real del canvas
    const bounds = wrapperRef.current.getBoundingClientRect()
    const centerScreen = {
      x: bounds.left + bounds.width / 2,
      y: bounds.top + bounds.height / 2,
    }
    const position = rf.screenToFlowPosition(centerScreen)

    const newNode: Node = {
      id,
      type: "default",
      position,
      data: { label: `Nodo ${id}` },
    }

    setNodes((nds) => nds.concat(newNode))
    queueMicrotask(() => rf.fitView({ padding: 0.2, duration: 250 }))
  }, [rf, setNodes])

  // ----------------------------
  // Proximity Connect (like example) :contentReference[oaicite:3]{index=3}
  // ----------------------------
  const getClosestEdge = useCallback(
    (dragNode: Node): { edge: Edge; isClose: boolean } => {
      let closest: { node: Node | null; dist: number } = {
        node: null,
        dist: Number.POSITIVE_INFINITY,
      }

      for (const n of nodes) {
        if (n.id === dragNode.id) continue
        const d = distance(n.position, dragNode.position)
        if (d < closest.dist) {
          closest = { node: n, dist: d }
        }
      }

      if (!closest.node) {
        return { edge: { id: "", source: "", target: "" }, isClose: false }
      }

      const isClose = closest.dist < MIN_DISTANCE

      // definir dirección (izq -> der) similar al ejemplo :contentReference[oaicite:4]{index=4}
      const closeNodeIsSource = closest.node.position.x < dragNode.position.x
      const source = closeNodeIsSource ? closest.node.id : dragNode.id
      const target = closeNodeIsSource ? dragNode.id : closest.node.id

      const edge: Edge = {
        id: `${source}-${target}`,
        source,
        target,
      }

      return { edge, isClose }
    },
    [nodes]
  )

  const onNodeDrag = useCallback(
    (_: unknown, node: Node) => {
      const { edge, isClose } = getClosestEdge(node)

      setEdges((es) => {
        // quitar temporal anterior
        const nextEdges = es.filter((e) => e.className !== "temp")

        if (!isClose) return nextEdges

        const alreadyExists = nextEdges.some(
          (e) => e.source === edge.source && e.target === edge.target
        )
        if (alreadyExists) return nextEdges

        // edge temporal punteado :contentReference[oaicite:5]{index=5}
        nextEdges.push({
          ...edge,
          className: "temp",
          style: { strokeDasharray: "5 5" },
        })

        return nextEdges
      })
    },
    [getClosestEdge, setEdges]
  )

  const onNodeDragStop = useCallback(
    (_: unknown, node: Node) => {
      const { edge, isClose } = getClosestEdge(node)

      setEdges((es) => {
        // quitar temporal
        const nextEdges = es.filter((e) => e.className !== "temp")

        if (!isClose) return nextEdges

        const alreadyExists = nextEdges.some(
          (e) => e.source === edge.source && e.target === edge.target
        )
        if (alreadyExists) return nextEdges

        // edge real (sin punteado) :contentReference[oaicite:6]{index=6}
        nextEdges.push({
          ...edge,
          id: `e-${edge.source}-${edge.target}-${Date.now()}`,
        })

        return nextEdges
      })
    },
    [getClosestEdge, setEdges]
  )

  // ----------------------------
  // Persistencia + copiar
  // ----------------------------
  const saveFlow = useCallback(() => {
    const doc: FlowDoc = { nodes, edges }
    localStorage.setItem("my-reactflow", JSON.stringify(doc))
    alert("Flow guardado en localStorage: my-reactflow")
  }, [nodes, edges])

  const loadFlow = useCallback(() => {
    const raw = localStorage.getItem("my-reactflow")
    if (!raw) return alert("No hay nada guardado todavía.")

    const parsed = JSON.parse(raw) as FlowDoc
    if (!parsed?.nodes || !parsed?.edges) return alert("Formato inválido.")

    setNodes(parsed.nodes)
    setEdges(parsed.edges)

    queueMicrotask(() => rf?.fitView({ padding: 0.2, duration: 300 }))
  }, [rf, setEdges, setNodes])

  const copyJSON = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(liveJSON)
      alert("JSON copiado")
    } catch {
      alert("No se pudo copiar.")
    }
  }, [liveJSON])

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 pb-3">
        <button
          onClick={addNode}
          className="rounded-md border px-3 py-2 text-sm"
        >
          + Crear nodo
        </button>

        <button onClick={fit} className="rounded-md border px-3 py-2 text-sm">
          Centrar (Fit)
        </button>

        <button
          onClick={saveFlow}
          className="rounded-md border px-3 py-2 text-sm"
        >
          Guardar
        </button>

        <button
          onClick={loadFlow}
          className="rounded-md border px-3 py-2 text-sm"
        >
          Cargar
        </button>

        <button
          onClick={copyJSON}
          className="rounded-md border px-3 py-2 text-sm"
        >
          Copiar JSON
        </button>
      </div>

      <div
        ref={wrapperRef}
        style={{
          width: "100%",
          height: "60vh",
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid rgba(0,0,0,0.12)",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onInit={setRf}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeDrag={onNodeDrag}
          onNodeDragStop={onNodeDragStop}
          fitView
          deleteKeyCode={["Backspace", "Delete"]}
          panOnScroll
          selectionOnDrag
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </div>

      <div className="mt-4">
        <div className="mb-2 text-sm font-medium">JSON en vivo</div>
        <pre
          style={{
            maxHeight: 280,
            overflow: "auto",
            borderRadius: 12,
            border: "1px solid rgba(0,0,0,0.12)",
            padding: 12,
            fontSize: 12,
          }}
        >
          {liveJSON}
        </pre>
      </div>
    </div>
  )
}

export default function Flow() {
  return (
    <ReactFlowProvider>
      <FlowCanvas />
    </ReactFlowProvider>
  )
}
