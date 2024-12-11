'use client'

import { useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState, type Node } from 'reactflow';
import 'reactflow/dist/style.css';

import { initialNodes, initialEdges, getNodeDetails } from '../data/serviceMapData';

interface ServiceMapProps {
  onNodeClick: (id: string) => void;
}

const customNodeStyles = {
  Operational: { border: '2px solid #22c55e', boxShadow: '0 0 10px #22c55e' },
  Degraded: { border: '2px solid #fbbf24', boxShadow: '0 0 10px #fbbf24' },
  Down: { border: '2px solid #ef4444', boxShadow: '0 0 10px #ef4444' },
  Success: { border: '2px solid #22c55e', boxShadow: '0 0 10px #22c55e' }, // Same as Operational
};

export function ServiceMap({ onNodeClick }: ServiceMapProps) {
  const [nodes,, onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const handleNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    onNodeClick(node.id);
  }, [onNodeClick]);

  // Update node styles based on their status
  const styledNodes = nodes.map(node => {
    const details = getNodeDetails(node.id);
    return {
      ...node,
      style: {
        ...node.style,
        ...(details?.status && customNodeStyles[details.status] || customNodeStyles.Operational),
      },
    };
  });

  return (
    <div className="h-[600px] bg-muted rounded-lg overflow-hidden">
      <ReactFlow
        nodes={styledNodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onNodeClick={handleNodeClick}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
}

