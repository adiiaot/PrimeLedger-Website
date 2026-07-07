import DashboardSidebar from '@/components/DashboardSidebar'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return <DashboardSidebar>{children}</DashboardSidebar>
}
