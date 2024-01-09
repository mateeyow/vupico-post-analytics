'use client';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { AgGridReact } from '@ag-grid-community/react';
import { ColDef, ColGroupDef, ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

type CommentTableProps<TData> = {
  data: TData[];
  columns: (ColDef<TData> | ColGroupDef<TData>)[];
};

export default function CommentTable<TData>({
  data,
  columns,
}: CommentTableProps<TData>) {
  return (
    <div className='ag-theme-quartz w-full h-[400px]'>
      <AgGridReact
        rowData={data}
        columnDefs={columns}
        autoSizeStrategy={{ type: 'fitCellContents' }}
      />
    </div>
  );
}
