export interface ITabs {
  onActiveTabChange: (tab: string) => () => void,
  activeTab: string
}