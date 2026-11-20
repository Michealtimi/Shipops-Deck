export type JobStatus = 'New' | 'In Progress' | 'Waiting' | 'Blocked' | 'Completed'
export type Priority = 'Low' | 'Normal' | 'High' | 'Urgent'
export type Job = { id: string; ref: string; title: string; category: string; assignee: string; priority: Priority; status: JobStatus; nextAction: string; due: string; description: string; updated: string; updates?: {author:string; text:string; timestamp:string}[] }
export const employees = ['Micheal Agunbiade', 'David Okoro', 'Sarah Adeyemi', 'Daniel James', 'Grace Williams']
export const categories = ['Vessel Call', 'Shipment', 'Cargo Operation', 'Documentation', 'Marine Service', 'Logistics Coordination']
export const initialJobs: Job[] = [
 {id:'j1',ref:'OPS-2048',title:'MV Atlantic Star — Apapa call',category:'Vessel Call',assignee:'David Okoro',priority:'Urgent',status:'In Progress',nextAction:'Confirm pilot boarding time',due:'2026-11-20',description:'Coordinate port call preparations and service confirmations for MV Atlantic Star at Apapa.',updated:'09:42'},
 {id:'j2',ref:'OPS-2047',title:'MV Ocean Pearl — port documentation',category:'Documentation',assignee:'Grace Williams',priority:'High',status:'Waiting',nextAction:'Await signed manifest from agent',due:'2026-11-20',description:'Review and submit required port documentation for the vessel call at Tin Can Island.',updated:'09:18'},
 {id:'j3',ref:'OPS-2046',title:'Cargo Job 104 — discharge coordination',category:'Cargo Operation',assignee:'Sarah Adeyemi',priority:'High',status:'Blocked',nextAction:'Resolve berth sequence conflict',due:'2026-11-19',description:'Coordinate discharge sequence and terminal access with the cargo team.',updated:'08:55'},
 {id:'j4',ref:'OPS-2045',title:'Shipment SHP-2045 — freight coordination',category:'Shipment',assignee:'Daniel James',priority:'Normal',status:'In Progress',nextAction:'Share revised delivery window',due:'2026-11-21',description:'Align inland delivery and consignee availability for outbound shipment.',updated:'08:30'},
 {id:'j5',ref:'OPS-2044',title:'MV Blue Horizon — marine service request',category:'Marine Service',assignee:'David Okoro',priority:'High',status:'New',nextAction:'Assign service launch',due:'2026-11-22',description:'Arrange marine service support ahead of scheduled arrival.',updated:'Yesterday'},
 {id:'j6',ref:'OPS-2043',title:'MV Northern Light — port service confirmation',category:'Vessel Call',assignee:'Micheal Agunbiade',priority:'Normal',status:'Waiting',nextAction:'Follow up with port services',due:'2026-11-23',description:'Track outstanding service confirmation for the port call.',updated:'Yesterday'},
 {id:'j7',ref:'OPS-2042',title:'Cargo Job 108 — documentation review',category:'Documentation',assignee:'Grace Williams',priority:'Normal',status:'In Progress',nextAction:'Verify cargo declaration',due:'2026-11-21',description:'Complete document review and resolve any declaration discrepancies.',updated:'Yesterday'},
 {id:'j8',ref:'OPS-2041',title:'Shipment SHP-2051 — delivery coordination',category:'Logistics Coordination',assignee:'Sarah Adeyemi',priority:'Low',status:'Completed',nextAction:'Close out delivery record',due:'2026-11-20',description:'Coordinate final-mile delivery and record proof of delivery.',updated:'Yesterday'},
 {id:'j9',ref:'OPS-2040',title:'MV Coastal Runner — call preparation',category:'Vessel Call',assignee:'David Okoro',priority:'Normal',status:'In Progress',nextAction:'Confirm arrival documents',due:'2026-11-24',description:'Prepare call documentation and notify relevant port stakeholders.',updated:'Yesterday'},
 {id:'j10',ref:'OPS-2039',title:'Marine Request MR-021 — service assignment',category:'Marine Service',assignee:'Daniel James',priority:'Low',status:'New',nextAction:'Confirm vendor availability',due:'2026-11-25',description:'Identify and assign a suitable marine service provider.',updated:'18 Nov'},
 {id:'j11',ref:'OPS-2038',title:'Cargo Job 112 — operational follow-up',category:'Cargo Operation',assignee:'Sarah Adeyemi',priority:'High',status:'Blocked',nextAction:'Receive terminal shift report',due:'2026-11-19',description:'Follow up on cargo operation progress and terminal shift reporting.',updated:'18 Nov'},
 {id:'j12',ref:'OPS-2037',title:'Shipment SHP-2060 — delivery confirmation',category:'Shipment',assignee:'Grace Williams',priority:'Normal',status:'Completed',nextAction:'Archive shipment file',due:'2026-11-20',description:'Confirm final delivery and complete the shipment record.',updated:'18 Nov'}
]
export const weekly = [{day:'Mon',done:8,open:12},{day:'Tue',done:11,open:10},{day:'Wed',done:7,open:13},{day:'Thu',done:14,open:9},{day:'Fri',done:10,open:8},{day:'Sat',done:4,open:5},{day:'Sun',done:6,open:4}]
export const activity = [
 {name:'Sarah Adeyemi',verb:'updated next action',job:'OPS-2046',text:'Berth sequence conflict raised with terminal team',time:'09:42'},
 {name:'Grace Williams',verb:'added an update to',job:'OPS-2047',text:'Manifest received; awaiting agent signature',time:'09:18'},
 {name:'David Okoro',verb:'changed status to In Progress',job:'OPS-2048',text:'Pilotage arrangements underway',time:'08:55'},
 {name:'Micheal Agunbiade',verb:'created job',job:'OPS-2044',text:'Marine service request for MV Blue Horizon',time:'08:14'}
]
export const api = { async listJobs(): Promise<Job[]> { return initialJobs }, async saveJob(job: Job): Promise<Job> { return job } }
