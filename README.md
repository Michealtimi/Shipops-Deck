# ShipOps Desk

### A Configurable Operations Workspace for Shipping & Logistics

ShipOps Desk is a prototype operations workspace designed to demonstrate how shipping and logistics businesses can organise shipment information, coordinate operational activities, monitor documentation progress and maintain visibility across day-to-day workflows.

It explores a shared operational environment where teams can track work, manage responsibilities and follow activities from initial shipment records through operational handovers.

**Project Status:** MVP / Demonstration Prototype

**Project Type:** Independent Product & Industry Exploration

**Primary Focus:** Shipping Operations, Freight Coordination & Operational Workflow Management

---

## 1. Overview

Shipping and logistics operations involve multiple activities, people, documents and coordination points.

A shipment may require documentation checks, operational assignments, status updates, communication between teams and follow-up on outstanding activities.

ShipOps Desk explores how these activities could be organised within a configurable shared workspace.

Rather than attempting to replace established enterprise resource planning (ERP), transportation management (TMS) or shipping management systems, the project focuses on providing a simple operational visibility layer for everyday coordination.

The goal is to demonstrate a practical approach to organising operational information and reducing fragmentation across routine workflows.

## 2. The Problem

Shipping and logistics teams often coordinate activities across different departments and operational responsibilities.

Examples include:

- Tracking shipment progress and outstanding activities.
- Monitoring documentation requirements.
- Assigning operational responsibilities.
- Following up on pending tasks.
- Maintaining records of operational updates.
- Coordinating handovers between team members.
- Identifying activities that require attention.

ShipOps Desk explores how these activities could be brought together in one structured workspace.

## 3. Key Features

### Operations Dashboard

A central overview of operational activities, shipment records, outstanding tasks and workflow status.

### Shipment Management

A structured workspace for viewing shipment records, shipment references, parties involved and current operational status.

### Documentation Tracking

Visibility into documentation requirements, outstanding documents and document-processing progress.

### Task & Activity Management

Organise operational activities, assign responsibilities, monitor outstanding work and follow up on tasks.

### Operational Timeline

A chronological view of recorded updates and activities associated with operational workflows.

### Team Coordination

A shared view of responsibilities, task progress and operational handovers.

### Reporting & Visibility

An overview of operational activity designed to help teams identify pending work and monitor workflow progress.

*Feature availability depends on the current implementation of the demonstration.*

## 4. Intended Users

ShipOps Desk is designed around workflows that may be relevant to:

- Shipping and vessel agency businesses.
- Freight forwarding companies.
- Marine logistics operators.
- Import and export coordination teams.
- Cargo and documentation departments.
- Logistics operations teams.

The prototype is intended to explore configurable workflows rather than impose one rigid operating model on every business.

## 5. Example Operational Workflow

The prototype is built around a simplified operational sequence:

1. **Shipment Registration:** Create or review a shipment record.
2. **Operational Review:** Examine shipment information and identify required activities.
3. **Task Assignment:** Organise responsibilities and outstanding tasks.
4. **Documentation Monitoring:** Track required documents and their status.
5. **Progress Updates:** Record operational activities and changes.
6. **Handover:** Maintain visibility when responsibilities move between team members.
7. **Operational Review:** Review outstanding activities and overall progress.

This workflow is illustrative. Actual shipping procedures vary depending on the business, cargo type, trade route and operational responsibilities.

## 6. Demonstration Environment

ShipOps Desk currently operates as an independent MVP demonstration.

The application uses simulated records and sample operational scenarios to demonstrate its interface and workflow concepts.

**Important:**

- No live shipping operations are being processed.
- Shipment records and operational information are illustrative.
- No real customer, vessel, cargo or financial information is represented.
- The application is not connected to shipping lines, port terminals, customs systems or vessel-tracking services.
- It is not currently a production shipping management system.

The demonstration is intended for product evaluation, workflow exploration and feedback.

## 7. Technology Stack

The project uses a modern web application stack:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- Lucide icons
- Recharts
- React Hook Form
- Zod
- Base UI
- Sonner
- Vercel Analytics

## 8. Screenshots & Live Demo

**Live Demo:** [Insert deployed Vercel URL]

Screenshots:

Add screenshots of the following application areas:

- Main operations dashboard.
- Shipment management.
- Documentation tracking.
- Task management.
- Operational activity timeline.

Screenshots should represent the actual deployed application.

## 9. Running Locally

### Prerequisites

- Node.js 20.9 or newer.
- pnpm 12.3.4 or the compatible package manager version.
- Git.

### Installation

Clone the repository:

```bash
git clone YOUR_REPOSITORY_URL
cd YOUR_PROJECT_DIRECTORY
```

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open the local application at:

```text
http://localhost:3000
```

No database, backend, API keys or environment file are required for the current demonstration. The application uses simulated records and browser-local state.

## Demonstration Routes

- `/login` and `/register` — demo entry points (authentication is not connected)
- `/dashboard` — operational overview, queue, attention items, activity and workload
- `/jobs`, `/jobs/new`, `/jobs/[id]` — shipment register, creation flow and job details
- `/my-tasks`, `/activity`, `/handovers`, `/handovers/[id]`
- `/reports` — operational metrics and CSV export
- `/settings/users`, `/settings/categories`, `/settings/organisation`

The seeded organisation is Meridian Shipping & Logistics Ltd. The typed mock data and service abstraction are in `lib/shipops-data.ts`. No production persistence or backend is included in this frontend demo.

## 10. Project Objectives

ShipOps Desk was independently developed to explore:

- How operational workflows can be represented digitally.
- How shipment information and operational tasks can be organised.
- How documentation progress can be made visible.
- How teams can maintain better visibility over outstanding responsibilities.
- How a configurable operations workspace might adapt to different shipping and logistics businesses.

The longer-term direction is to explore feedback from industry professionals and understand which workflows provide the greatest practical value.

## 11. Current Scope & Future Exploration

Potential areas for future development include:

- Configurable operational workflows.
- Role-based team responsibilities.
- More detailed shipment lifecycle management.
- Document upload and verification workflows.
- Operational notifications and escalation.
- Activity audit trails.
- Reporting and performance monitoring.
- Integration with existing business systems.

These are exploration areas, not claims of currently implemented functionality.

## 12. Feedback & Contact

I welcome feedback from shipping professionals, logistics operators, maritime practitioners and software developers interested in operational workflow improvement.

**Project Author:** Micheal Agunbiade

**Email:** [michealagunbiade1@gmail.com](mailto:michealagunbiade1@gmail.com)

**LinkedIn:** [https://linkedin.com/in/micheal-agunbiade-257398253](https://linkedin.com/in/micheal-agunbiade-257398253)

**GitHub:** [https://github.com/Michealtimi](https://github.com/Michealtimi)

---

*ShipOps Desk is an independent demonstration project. It is not affiliated with, endorsed by or operated on behalf of any shipping company or maritime organisation.*
# Shipops-Deck
