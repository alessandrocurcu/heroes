/**
 * Serve per stabilire un filtro di partenza già applicato alla tabella
 * Il DataGrid deve avere :onContentReady="onContentReady"
 * La colonna deve essere definita come sotto
 {
  caption: 'Is in Seojs3.js',
  dataField: 'seojs3',
  allowSorting: true,
  allowHeaderFiltering: true,
  allowFiltering: true,
  visible: true,
  selectedFilterOperation: '=',
  filterValue: true,
},
 */
import { computed, ref } from 'vue';

export default function useDxDataGrid() {
  const onContentReady = (e: any) => {
    const columnsheader = document.querySelectorAll('.dx-header-row td');
    for (let i = 0; i < e.component.columnCount(); i++) {
      const columnVisibleIndex = e.component.getVisibleColumnIndex(
        e.component.columnOption(i, 'name')
      );
      if (
        e.component.columnOption(i, 'filterValue') ||
        e.component.columnOption(i, 'filterValues')
      ) {
        if (columnsheader[columnVisibleIndex]) {
          columnsheader[columnVisibleIndex].classList.add('filterApplied');
        }
      } else {
        if (columnsheader[columnVisibleIndex]) {
          columnsheader[columnVisibleIndex].classList.remove('filterApplied');
        }
      }
    }
  };
  const selectedResources: any = ref([]);
  const onSelectionChanged = (e: any) => {
    selectedResources.value = e.selectedRowsData;
  };
  const selectedResourceUI = computed(() => {
    return (
      selectedResources.value?.map((_resource: any) => _resource.id)?.join(', ') ||
      'No resource selected'
    );
  });
  return {
    onContentReady,
    onSelectionChanged,
    selectedResources,
    selectedResourceUI
  };
}
