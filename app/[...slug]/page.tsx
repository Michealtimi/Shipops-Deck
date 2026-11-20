import { ShipOpsApp } from '@/components/shipops-app'
export default async function RoutePage({params}:{params:Promise<{slug:string[]}>}) { const {slug}=await params; const path='/'+slug.join('/'); const mode=path==='/login'?'login':path==='/register'?'register':'app'; return <ShipOpsApp mode={mode}/> }
