(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/95a37_@mui_x-data-grid_hooks_features_rows_37df59._.js", {

"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsSelector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "gridAdditionalRowGroupsSelector": (()=>gridAdditionalRowGroupsSelector),
    "gridDataRowIdsSelector": (()=>gridDataRowIdsSelector),
    "gridPinnedRowsCountSelector": (()=>gridPinnedRowsCountSelector),
    "gridPinnedRowsSelector": (()=>gridPinnedRowsSelector),
    "gridRowCountSelector": (()=>gridRowCountSelector),
    "gridRowGroupingNameSelector": (()=>gridRowGroupingNameSelector),
    "gridRowGroupsToFetchSelector": (()=>gridRowGroupsToFetchSelector),
    "gridRowMaximumTreeDepthSelector": (()=>gridRowMaximumTreeDepthSelector),
    "gridRowTreeDepthsSelector": (()=>gridRowTreeDepthsSelector),
    "gridRowTreeSelector": (()=>gridRowTreeSelector),
    "gridRowsDataRowIdToIdLookupSelector": (()=>gridRowsDataRowIdToIdLookupSelector),
    "gridRowsLoadingSelector": (()=>gridRowsLoadingSelector),
    "gridRowsLookupSelector": (()=>gridRowsLookupSelector),
    "gridTopLevelRowCountSelector": (()=>gridTopLevelRowCountSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/createSelector.js [app-client] (ecmascript)");
;
const gridRowsStateSelector = (state)=>state.rows;
const gridRowCountSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.totalRowCount);
const gridRowsLoadingSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.loading);
const gridTopLevelRowCountSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.totalTopLevelRowCount);
const gridRowsLookupSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.dataRowIdToModelLookup);
const gridRowsDataRowIdToIdLookupSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.dataRowIdToIdLookup);
const gridRowTreeSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.tree);
const gridRowGroupsToFetchSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.groupsToFetch);
const gridRowGroupingNameSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.groupingName);
const gridRowTreeDepthsSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.treeDepths);
const gridRowMaximumTreeDepthSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorMemoized"])(gridRowsStateSelector, (rows)=>{
    const entries = Object.entries(rows.treeDepths);
    if (entries.length === 0) {
        return 1;
    }
    return (entries.filter(([, nodeCount])=>nodeCount > 0).map(([depth])=>Number(depth)).sort((a, b)=>b - a)[0] ?? 0) + 1;
});
const gridDataRowIdsSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows.dataRowIds);
const gridAdditionalRowGroupsSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowsStateSelector, (rows)=>rows?.additionalRowGroups);
const gridPinnedRowsSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelectorMemoized"])(gridAdditionalRowGroupsSelector, (additionalRowGroups)=>{
    const rawPinnedRows = additionalRowGroups?.pinnedRows;
    return {
        bottom: rawPinnedRows?.bottom?.map((rowEntry)=>({
                id: rowEntry.id,
                model: rowEntry.model ?? {}
            })) ?? [],
        top: rawPinnedRows?.top?.map((rowEntry)=>({
                id: rowEntry.id,
                model: rowEntry.model ?? {}
            })) ?? []
    };
});
const gridPinnedRowsCountSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridPinnedRowsSelector, (pinnedRows)=>{
    return (pinnedRows?.top?.length || 0) + (pinnedRows?.bottom?.length || 0);
});
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "GRID_ID_AUTOGENERATED": (()=>GRID_ID_AUTOGENERATED),
    "GRID_ROOT_GROUP_ID": (()=>GRID_ROOT_GROUP_ID),
    "buildRootGroup": (()=>buildRootGroup),
    "checkGridRowIdIsValid": (()=>checkGridRowIdIsValid),
    "computeRowsUpdates": (()=>computeRowsUpdates),
    "createRowsInternalCache": (()=>createRowsInternalCache),
    "getRowHeightWarning": (()=>getRowHeightWarning),
    "getRowIdFromRowModel": (()=>getRowIdFromRowModel),
    "getRowsStateFromCache": (()=>getRowsStateFromCache),
    "getTopLevelRowCount": (()=>getTopLevelRowCount),
    "getTreeNodeDescendants": (()=>getTreeNodeDescendants),
    "getValidRowHeight": (()=>getValidRowHeight),
    "isAutogeneratedRow": (()=>isAutogeneratedRow),
    "isAutogeneratedRowNode": (()=>isAutogeneratedRowNode),
    "minimalContentHeight": (()=>minimalContentHeight),
    "rowHeightWarning": (()=>rowHeightWarning),
    "updateCacheWithNewRows": (()=>updateCacheWithNewRows)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
;
const GRID_ROOT_GROUP_ID = `auto-generated-group-node-root`;
const GRID_ID_AUTOGENERATED = Symbol('mui.id_autogenerated');
const buildRootGroup = ()=>({
        type: 'group',
        id: GRID_ROOT_GROUP_ID,
        depth: -1,
        groupingField: null,
        groupingKey: null,
        isAutoGenerated: true,
        children: [],
        childrenFromPath: {},
        childrenExpanded: true,
        parent: null
    });
function checkGridRowIdIsValid(id, row, detailErrorMessage = 'A row was provided without id in the rows prop:') {
    if (id == null) {
        throw new Error([
            'MUI X: The Data Grid component requires all rows to have a unique `id` property.',
            'Alternatively, you can use the `getRowId` prop to specify a custom id for each row.',
            detailErrorMessage,
            JSON.stringify(row)
        ].join('\n'));
    }
}
const getRowIdFromRowModel = (rowModel, getRowId, detailErrorMessage)=>{
    const id = getRowId ? getRowId(rowModel) : rowModel.id;
    checkGridRowIdIsValid(id, rowModel, detailErrorMessage);
    return id;
};
const createRowsInternalCache = ({ rows, getRowId, loading, rowCount })=>{
    const updates = {
        type: 'full',
        rows: []
    };
    const dataRowIdToModelLookup = {};
    const dataRowIdToIdLookup = {};
    for(let i = 0; i < rows.length; i += 1){
        const model = rows[i];
        const id = getRowIdFromRowModel(model, getRowId);
        dataRowIdToModelLookup[id] = model;
        dataRowIdToIdLookup[id] = id;
        updates.rows.push(id);
    }
    return {
        rowsBeforePartialUpdates: rows,
        loadingPropBeforePartialUpdates: loading,
        rowCountPropBeforePartialUpdates: rowCount,
        updates,
        dataRowIdToIdLookup,
        dataRowIdToModelLookup
    };
};
const getTopLevelRowCount = ({ tree, rowCountProp = 0 })=>{
    const rootGroupNode = tree[GRID_ROOT_GROUP_ID];
    return Math.max(rowCountProp, rootGroupNode.children.length + (rootGroupNode.footerId == null ? 0 : 1));
};
const getRowsStateFromCache = ({ apiRef, rowCountProp = 0, loadingProp, previousTree, previousTreeDepths, previousGroupsToFetch })=>{
    const cache = apiRef.current.caches.rows;
    // 1. Apply the "rowTreeCreation" family processing.
    const { tree: unProcessedTree, treeDepths: unProcessedTreeDepths, dataRowIds: unProcessedDataRowIds, groupingName, groupsToFetch = [] } = apiRef.current.applyStrategyProcessor('rowTreeCreation', {
        previousTree,
        previousTreeDepths,
        updates: cache.updates,
        dataRowIdToIdLookup: cache.dataRowIdToIdLookup,
        dataRowIdToModelLookup: cache.dataRowIdToModelLookup,
        previousGroupsToFetch
    });
    // 2. Apply the "hydrateRows" pipe-processing.
    const groupingParamsWithHydrateRows = apiRef.current.unstable_applyPipeProcessors('hydrateRows', {
        tree: unProcessedTree,
        treeDepths: unProcessedTreeDepths,
        dataRowIdToIdLookup: cache.dataRowIdToIdLookup,
        dataRowIds: unProcessedDataRowIds,
        dataRowIdToModelLookup: cache.dataRowIdToModelLookup
    });
    // 3. Reset the cache updates
    apiRef.current.caches.rows.updates = {
        type: 'partial',
        actions: {
            insert: [],
            modify: [],
            remove: []
        },
        idToActionLookup: {}
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, groupingParamsWithHydrateRows, {
        totalRowCount: Math.max(rowCountProp, groupingParamsWithHydrateRows.dataRowIds.length),
        totalTopLevelRowCount: getTopLevelRowCount({
            tree: groupingParamsWithHydrateRows.tree,
            rowCountProp
        }),
        groupingName,
        loading: loadingProp,
        groupsToFetch
    });
};
const isAutogeneratedRow = (row)=>GRID_ID_AUTOGENERATED in row;
const isAutogeneratedRowNode = (rowNode)=>rowNode.type === 'skeletonRow' || rowNode.type === 'footer' || rowNode.type === 'group' && rowNode.isAutoGenerated || rowNode.type === 'pinnedRow' && rowNode.isAutoGenerated;
const getTreeNodeDescendants = (tree, parentId, skipAutoGeneratedRows)=>{
    const node = tree[parentId];
    if (node.type !== 'group') {
        return [];
    }
    const validDescendants = [];
    for(let i = 0; i < node.children.length; i += 1){
        const child = node.children[i];
        if (!skipAutoGeneratedRows || !isAutogeneratedRowNode(tree[child])) {
            validDescendants.push(child);
        }
        const childDescendants = getTreeNodeDescendants(tree, child, skipAutoGeneratedRows);
        for(let j = 0; j < childDescendants.length; j += 1){
            validDescendants.push(childDescendants[j]);
        }
    }
    if (!skipAutoGeneratedRows && node.footerId != null) {
        validDescendants.push(node.footerId);
    }
    return validDescendants;
};
const updateCacheWithNewRows = ({ previousCache, getRowId, updates, groupKeys })=>{
    if (previousCache.updates.type === 'full') {
        throw new Error('MUI X: Unable to prepare a partial update if a full update is not applied yet.');
    }
    // Remove duplicate updates.
    // A server can batch updates, and send several updates for the same row in one fn call.
    const uniqueUpdates = new Map();
    updates.forEach((update)=>{
        const id = getRowIdFromRowModel(update, getRowId, 'A row was provided without id when calling updateRows():');
        if (uniqueUpdates.has(id)) {
            uniqueUpdates.set(id, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, uniqueUpdates.get(id), update));
        } else {
            uniqueUpdates.set(id, update);
        }
    });
    const partialUpdates = {
        type: 'partial',
        actions: {
            insert: [
                ...previousCache.updates.actions.insert ?? []
            ],
            modify: [
                ...previousCache.updates.actions.modify ?? []
            ],
            remove: [
                ...previousCache.updates.actions.remove ?? []
            ]
        },
        idToActionLookup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, previousCache.updates.idToActionLookup),
        groupKeys
    };
    const dataRowIdToModelLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, previousCache.dataRowIdToModelLookup);
    const dataRowIdToIdLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, previousCache.dataRowIdToIdLookup);
    const alreadyAppliedActionsToRemove = {
        insert: {},
        modify: {},
        remove: {}
    };
    // Depending on the action already applied to the data row,
    // We might want drop the already-applied-update.
    // For instance:
    // - if you delete then insert, then you don't want to apply the deletion in the tree.
    // - if you insert, then modify, then you just want to apply the insertion in the tree.
    uniqueUpdates.forEach((partialRow, id)=>{
        const actionAlreadyAppliedToRow = partialUpdates.idToActionLookup[id];
        // Action === "delete"
        // eslint-disable-next-line no-underscore-dangle
        if (partialRow._action === 'delete') {
            // If the data row has been removed since the last state update,
            // Then do nothing.
            if (actionAlreadyAppliedToRow === 'remove' || !dataRowIdToModelLookup[id]) {
                return;
            }
            // If the data row has been inserted / modified since the last state update,
            // Then drop this "insert" / "modify" update.
            if (actionAlreadyAppliedToRow != null) {
                alreadyAppliedActionsToRemove[actionAlreadyAppliedToRow][id] = true;
            }
            // Remove the data row from the lookups and add it to the "delete" update.
            partialUpdates.actions.remove.push(id);
            delete dataRowIdToModelLookup[id];
            delete dataRowIdToIdLookup[id];
            return;
        }
        const oldRow = dataRowIdToModelLookup[id];
        // Action === "modify"
        if (oldRow) {
            // If the data row has been removed since the last state update,
            // Then drop this "remove" update and add it to the "modify" update instead.
            if (actionAlreadyAppliedToRow === 'remove') {
                alreadyAppliedActionsToRemove.remove[id] = true;
                partialUpdates.actions.modify.push(id);
            } else if (actionAlreadyAppliedToRow == null) {
                partialUpdates.actions.modify.push(id);
            }
            // Update the data row lookups.
            dataRowIdToModelLookup[id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, oldRow, partialRow);
            return;
        }
        // Action === "insert"
        // If the data row has been removed since the last state update,
        // Then drop the "remove" update and add it to the "insert" update instead.
        if (actionAlreadyAppliedToRow === 'remove') {
            alreadyAppliedActionsToRemove.remove[id] = true;
            partialUpdates.actions.insert.push(id);
        } else if (actionAlreadyAppliedToRow == null) {
            partialUpdates.actions.insert.push(id);
        }
        // Update the data row lookups.
        dataRowIdToModelLookup[id] = partialRow;
        dataRowIdToIdLookup[id] = id;
    });
    const actionTypeWithActionsToRemove = Object.keys(alreadyAppliedActionsToRemove);
    for(let i = 0; i < actionTypeWithActionsToRemove.length; i += 1){
        const actionType = actionTypeWithActionsToRemove[i];
        const idsToRemove = alreadyAppliedActionsToRemove[actionType];
        if (Object.keys(idsToRemove).length > 0) {
            partialUpdates.actions[actionType] = partialUpdates.actions[actionType].filter((id)=>!idsToRemove[id]);
        }
    }
    return {
        dataRowIdToModelLookup,
        dataRowIdToIdLookup,
        updates: partialUpdates,
        rowsBeforePartialUpdates: previousCache.rowsBeforePartialUpdates,
        loadingPropBeforePartialUpdates: previousCache.loadingPropBeforePartialUpdates,
        rowCountPropBeforePartialUpdates: previousCache.rowCountPropBeforePartialUpdates
    };
};
const minimalContentHeight = 'var(--DataGrid-overlayHeight, calc(var(--height) * 2))';
function computeRowsUpdates(apiRef, updates, getRowId) {
    const nonPinnedRowsUpdates = [];
    updates.forEach((update)=>{
        const id = getRowIdFromRowModel(update, getRowId, 'A row was provided without id when calling updateRows():');
        const rowNode = apiRef.current.getRowNode(id);
        if (rowNode?.type === 'pinnedRow') {
            // @ts-ignore because otherwise `release:build` doesn't work
            const pinnedRowsCache = apiRef.current.caches.pinnedRows;
            const prevModel = pinnedRowsCache.idLookup[id];
            if (prevModel) {
                pinnedRowsCache.idLookup[id] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, prevModel, update);
            }
        } else {
            nonPinnedRowsUpdates.push(update);
        }
    });
    return nonPinnedRowsUpdates;
}
let warnedOnceInvalidRowHeight = false;
const getValidRowHeight = (rowHeightProp, defaultRowHeight, warningMessage)=>{
    if (typeof rowHeightProp === 'number' && rowHeightProp > 0) {
        return rowHeightProp;
    }
    if (("TURBOPACK compile-time value", "development") !== 'production' && !warnedOnceInvalidRowHeight && typeof rowHeightProp !== 'undefined' && rowHeightProp !== null) {
        console.warn(warningMessage);
        warnedOnceInvalidRowHeight = true;
    }
    return defaultRowHeight;
};
const rowHeightWarning = [
    `MUI X: The \`rowHeight\` prop should be a number greater than 0.`,
    `The default value will be used instead.`
].join('\n');
const getRowHeightWarning = [
    `MUI X: The \`getRowHeight\` prop should return a number greater than 0 or 'auto'.`,
    `The default value will be used instead.`
].join('\n');
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowAriaAttributes.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useGridRowAriaAttributes": (()=>useGridRowAriaAttributes)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridPrivateApiContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridPrivateApiContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rowSelection$2f$gridRowSelectionSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rowSelection/gridRowSelectionSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columnGrouping$2f$gridColumnGroupsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/columnGrouping/gridColumnGroupsSelector.js [app-client] (ecmascript)");
;
;
;
;
;
const useGridRowAriaAttributes = ()=>{
    const apiRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridPrivateApiContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridPrivateApiContext"])();
    const selectedIdsLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rowSelection$2f$gridRowSelectionSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectedIdsLookupSelector"]);
    const headerGroupingMaxDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columnGrouping$2f$gridColumnGroupsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridColumnGroupsHeaderMaxDepthSelector"]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRowAriaAttributes.useCallback": (rowNode, index)=>{
            const ariaAttributes = {};
            const ariaRowIndex = index + headerGroupingMaxDepth + 2; // 1 for the header row and 1 as it's 1-based
            ariaAttributes['aria-rowindex'] = ariaRowIndex;
            if (apiRef.current.isRowSelectable(rowNode.id)) {
                ariaAttributes['aria-selected'] = selectedIdsLookup[rowNode.id] !== undefined;
            }
            return ariaAttributes;
        }
    }["useGridRowAriaAttributes.useCallback"], [
        apiRef,
        selectedIdsLookup,
        headerGroupingMaxDepth
    ]);
};
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowSpanningSelectors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "gridRowSpanningHiddenCellsOriginMapSelector": (()=>gridRowSpanningHiddenCellsOriginMapSelector),
    "gridRowSpanningHiddenCellsSelector": (()=>gridRowSpanningHiddenCellsSelector),
    "gridRowSpanningSpannedCellsSelector": (()=>gridRowSpanningSpannedCellsSelector)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/createSelector.js [app-client] (ecmascript)");
;
const gridRowSpanningStateSelector = (state)=>state.rowSpanning;
const gridRowSpanningHiddenCellsSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowSpanningStateSelector, (rowSpanning)=>rowSpanning.hiddenCells);
const gridRowSpanningSpannedCellsSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowSpanningStateSelector, (rowSpanning)=>rowSpanning.spannedCells);
const gridRowSpanningHiddenCellsOriginMapSelector = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$createSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSelector"])(gridRowSpanningStateSelector, (rowSpanning)=>rowSpanning.hiddenCellOriginMap);
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsMetaSelector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "gridRowsMetaSelector": (()=>gridRowsMetaSelector)
});
const gridRowsMetaSelector = (state)=>state.rowsMeta;
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowsPreProcessors.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useGridRowsPreProcessors": (()=>useGridRowsPreProcessors)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$strategyProcessing$2f$useGridStrategyProcessing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/core/strategyProcessing/useGridStrategyProcessing.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$strategyProcessing$2f$useGridRegisterStrategyProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/core/strategyProcessing/useGridRegisterStrategyProcessor.js [app-client] (ecmascript)");
;
;
;
const createFlatRowTree = (rows)=>{
    const tree = {
        [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildRootGroup"])(), {
            children: rows
        })
    };
    for(let i = 0; i < rows.length; i += 1){
        const rowId = rows[i];
        tree[rowId] = {
            id: rowId,
            depth: 0,
            parent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"],
            type: 'leaf',
            groupingKey: null
        };
    }
    return {
        groupingName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$strategyProcessing$2f$useGridStrategyProcessing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_DEFAULT_STRATEGY"],
        tree,
        treeDepths: {
            0: rows.length
        },
        dataRowIds: rows
    };
};
const updateFlatRowTree = ({ previousTree, actions })=>{
    const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, previousTree);
    const idsToRemoveFromRootGroup = {};
    for(let i = 0; i < actions.remove.length; i += 1){
        const idToDelete = actions.remove[i];
        idsToRemoveFromRootGroup[idToDelete] = true;
        delete tree[idToDelete];
    }
    for(let i = 0; i < actions.insert.length; i += 1){
        const idToInsert = actions.insert[i];
        tree[idToInsert] = {
            id: idToInsert,
            depth: 0,
            parent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"],
            type: 'leaf',
            groupingKey: null
        };
    }
    // TODO rows v6: Support row unpinning
    const rootGroup = tree[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"]];
    let rootGroupChildren = [
        ...rootGroup.children,
        ...actions.insert
    ];
    if (Object.values(idsToRemoveFromRootGroup).length) {
        rootGroupChildren = rootGroupChildren.filter((id)=>!idsToRemoveFromRootGroup[id]);
    }
    tree[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, rootGroup, {
        children: rootGroupChildren
    });
    return {
        groupingName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$strategyProcessing$2f$useGridStrategyProcessing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_DEFAULT_STRATEGY"],
        tree,
        treeDepths: {
            0: rootGroupChildren.length
        },
        dataRowIds: rootGroupChildren
    };
};
const flatRowTreeCreationMethod = (params)=>{
    if (params.updates.type === 'full') {
        return createFlatRowTree(params.updates.rows);
    }
    return updateFlatRowTree({
        previousTree: params.previousTree,
        actions: params.updates.actions
    });
};
const useGridRowsPreProcessors = (apiRef)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$strategyProcessing$2f$useGridRegisterStrategyProcessor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridRegisterStrategyProcessor"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$strategyProcessing$2f$useGridStrategyProcessing$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_DEFAULT_STRATEGY"], 'rowTreeCreation', flatRowTreeCreationMethod);
};
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/useGridRows.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "rowsStateInitializer": (()=>rowsStateInitializer),
    "useGridRows": (()=>useGridRows)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridLogger.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useTimeout$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTimeout$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/useTimeout/useTimeout.js [app-client] (ecmascript) <export default as useTimeout>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridApiEventHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridVisibleRows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridVisibleRows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$sorting$2f$gridSortingSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/sorting/gridSortingSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$filter$2f$gridFilterSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/filter/gridFilterSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$pipeProcessing$2f$useGridRegisterPipeApplier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridRegisterPipeApplier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridApiMethod.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const rowsStateInitializer = (state, props, apiRef)=>{
    const isDataSourceAvailable = !!props.unstable_dataSource;
    apiRef.current.caches.rows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRowsInternalCache"])({
        rows: isDataSourceAvailable ? [] : props.rows,
        getRowId: props.getRowId,
        loading: props.loading,
        rowCount: props.rowCount
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
        rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRowsStateFromCache"])({
            apiRef,
            rowCountProp: props.rowCount,
            loadingProp: isDataSourceAvailable ? true : props.loading,
            previousTree: null,
            previousTreeDepths: null
        })
    });
};
const useGridRows = (apiRef, props)=>{
    if ("TURBOPACK compile-time truthy", 1) {
        try {
            // Freeze the `rows` prop so developers have a fast failure if they try to use Array.prototype.push().
            Object.freeze(props.rows);
        } catch (error) {
        // Sometimes, it's impossible to freeze, so we give up on it.
        }
    }
    const logger = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridLogger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridLogger"])(apiRef, 'useGridRows');
    const lastUpdateMs = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(Date.now());
    const lastRowCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(props.rowCount);
    const timeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useTimeout$2f$useTimeout$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__useTimeout$3e$__["useTimeout"])();
    const getRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[getRow]": (id)=>{
            const model = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowsLookupSelector"])(apiRef)[id];
            if (model) {
                return model;
            }
            const node = apiRef.current.getRowNode(id);
            if (node && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAutogeneratedRowNode"])(node)) {
                return {
                    [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ID_AUTOGENERATED"]]: id
                };
            }
            return null;
        }
    }["useGridRows.useCallback[getRow]"], [
        apiRef
    ]);
    const getRowIdProp = props.getRowId;
    const getRowId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[getRowId]": (row)=>{
            if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ID_AUTOGENERATED"] in row) {
                return row[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ID_AUTOGENERATED"]];
            }
            if (getRowIdProp) {
                return getRowIdProp(row);
            }
            return row.id;
        }
    }["useGridRows.useCallback[getRowId]"], [
        getRowIdProp
    ]);
    const throttledRowsChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[throttledRowsChange]": ({ cache, throttle })=>{
            const run = {
                "useGridRows.useCallback[throttledRowsChange].run": ()=>{
                    lastUpdateMs.current = Date.now();
                    apiRef.current.setState({
                        "useGridRows.useCallback[throttledRowsChange].run": (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                                rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRowsStateFromCache"])({
                                    apiRef,
                                    rowCountProp: props.rowCount,
                                    loadingProp: props.loading,
                                    previousTree: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowTreeSelector"])(apiRef),
                                    previousTreeDepths: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowTreeDepthsSelector"])(apiRef),
                                    previousGroupsToFetch: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowGroupsToFetchSelector"])(apiRef)
                                })
                            })
                    }["useGridRows.useCallback[throttledRowsChange].run"]);
                    apiRef.current.publishEvent('rowsSet');
                    apiRef.current.forceUpdate();
                }
            }["useGridRows.useCallback[throttledRowsChange].run"];
            timeout.clear();
            apiRef.current.caches.rows = cache;
            if (!throttle) {
                run();
                return;
            }
            const throttleRemainingTimeMs = props.throttleRowsMs - (Date.now() - lastUpdateMs.current);
            if (throttleRemainingTimeMs > 0) {
                timeout.start(throttleRemainingTimeMs, run);
                return;
            }
            run();
        }
    }["useGridRows.useCallback[throttledRowsChange]"], [
        props.throttleRowsMs,
        props.rowCount,
        props.loading,
        apiRef,
        timeout
    ]);
    /**
   * API METHODS
   */ const setRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[setRows]": (rows)=>{
            logger.debug(`Updating all rows, new length ${rows.length}`);
            const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRowsInternalCache"])({
                rows,
                getRowId: props.getRowId,
                loading: props.loading,
                rowCount: props.rowCount
            });
            const prevCache = apiRef.current.caches.rows;
            cache.rowsBeforePartialUpdates = prevCache.rowsBeforePartialUpdates;
            throttledRowsChange({
                cache,
                throttle: true
            });
        }
    }["useGridRows.useCallback[setRows]"], [
        logger,
        props.getRowId,
        props.loading,
        props.rowCount,
        throttledRowsChange,
        apiRef
    ]);
    const updateRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[updateRows]": (updates)=>{
            if (props.signature === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridSignature"].DataGrid && updates.length > 1) {
                throw new Error([
                    'MUI X: You cannot update several rows at once in `apiRef.current.updateRows` on the DataGrid.',
                    'You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature.'
                ].join('\n'));
            }
            const nonPinnedRowsUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeRowsUpdates"])(apiRef, updates, props.getRowId);
            const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCacheWithNewRows"])({
                updates: nonPinnedRowsUpdates,
                getRowId: props.getRowId,
                previousCache: apiRef.current.caches.rows
            });
            throttledRowsChange({
                cache,
                throttle: true
            });
        }
    }["useGridRows.useCallback[updateRows]"], [
        props.signature,
        props.getRowId,
        throttledRowsChange,
        apiRef
    ]);
    const updateServerRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[updateServerRows]": (updates, groupKeys)=>{
            const nonPinnedRowsUpdates = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["computeRowsUpdates"])(apiRef, updates, props.getRowId);
            const cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateCacheWithNewRows"])({
                updates: nonPinnedRowsUpdates,
                getRowId: props.getRowId,
                previousCache: apiRef.current.caches.rows,
                groupKeys: groupKeys ?? []
            });
            throttledRowsChange({
                cache,
                throttle: false
            });
        }
    }["useGridRows.useCallback[updateServerRows]"], [
        props.getRowId,
        throttledRowsChange,
        apiRef
    ]);
    const setLoading = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[setLoading]": (loading)=>{
            if (loading === props.loading) {
                return;
            }
            logger.debug(`Setting loading to ${loading}`);
            apiRef.current.setState({
                "useGridRows.useCallback[setLoading]": (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                        rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.rows, {
                            loading
                        })
                    })
            }["useGridRows.useCallback[setLoading]"]);
            apiRef.current.caches.rows.loadingPropBeforePartialUpdates = loading;
        }
    }["useGridRows.useCallback[setLoading]"], [
        props.loading,
        apiRef,
        logger
    ]);
    const getRowModels = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[getRowModels]": ()=>{
            const dataRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDataRowIdsSelector"])(apiRef);
            const idRowsLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowsLookupSelector"])(apiRef);
            return new Map(dataRows.map({
                "useGridRows.useCallback[getRowModels]": (id)=>[
                        id,
                        idRowsLookup[id] ?? {}
                    ]
            }["useGridRows.useCallback[getRowModels]"]));
        }
    }["useGridRows.useCallback[getRowModels]"], [
        apiRef
    ]);
    const getRowsCount = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[getRowsCount]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowCountSelector"])(apiRef)
    }["useGridRows.useCallback[getRowsCount]"], [
        apiRef
    ]);
    const getAllRowIds = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[getAllRowIds]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDataRowIdsSelector"])(apiRef)
    }["useGridRows.useCallback[getAllRowIds]"], [
        apiRef
    ]);
    const getRowIndexRelativeToVisibleRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[getRowIndexRelativeToVisibleRows]": (id)=>{
            const row = apiRef.current.getRow(id);
            const { rowToIndexMap } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridVisibleRows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibleRows"])(apiRef);
            return rowToIndexMap.get(row);
        }
    }["useGridRows.useCallback[getRowIndexRelativeToVisibleRows]"], [
        apiRef
    ]);
    const setRowChildrenExpansion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[setRowChildrenExpansion]": (id, isExpanded)=>{
            const currentNode = apiRef.current.getRowNode(id);
            if (!currentNode) {
                throw new Error(`MUI X: No row with id #${id} found.`);
            }
            if (currentNode.type !== 'group') {
                throw new Error('MUI X: Only group nodes can be expanded or collapsed.');
            }
            const newNode = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, currentNode, {
                childrenExpanded: isExpanded
            });
            apiRef.current.setState({
                "useGridRows.useCallback[setRowChildrenExpansion]": (state)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                        rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.rows, {
                            tree: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.rows.tree, {
                                [id]: newNode
                            })
                        })
                    });
                }
            }["useGridRows.useCallback[setRowChildrenExpansion]"]);
            apiRef.current.forceUpdate();
            apiRef.current.publishEvent('rowExpansionChange', newNode);
        }
    }["useGridRows.useCallback[setRowChildrenExpansion]"], [
        apiRef
    ]);
    const getRowNode = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[getRowNode]": (id)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowTreeSelector"])(apiRef)[id] ?? null
    }["useGridRows.useCallback[getRowNode]"], [
        apiRef
    ]);
    const getRowGroupChildren = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[getRowGroupChildren]": ({ skipAutoGeneratedRows = true, groupId, applySorting, applyFiltering })=>{
            const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowTreeSelector"])(apiRef);
            let children;
            if (applySorting) {
                const groupNode = tree[groupId];
                if (!groupNode) {
                    return [];
                }
                const sortedRowIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$sorting$2f$gridSortingSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridSortedRowIdsSelector"])(apiRef);
                children = [];
                const startIndex = sortedRowIds.findIndex({
                    "useGridRows.useCallback[getRowGroupChildren]": (id)=>id === groupId
                }["useGridRows.useCallback[getRowGroupChildren]"]) + 1;
                for(let index = startIndex; index < sortedRowIds.length && tree[sortedRowIds[index]].depth > groupNode.depth; index += 1){
                    const id = sortedRowIds[index];
                    if (!skipAutoGeneratedRows || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAutogeneratedRowNode"])(tree[id])) {
                        children.push(id);
                    }
                }
            } else {
                children = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTreeNodeDescendants"])(tree, groupId, skipAutoGeneratedRows);
            }
            if (applyFiltering) {
                const filteredRowsLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$filter$2f$gridFilterSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridFilteredRowsLookupSelector"])(apiRef);
                children = children.filter({
                    "useGridRows.useCallback[getRowGroupChildren]": (childId)=>filteredRowsLookup[childId] !== false
                }["useGridRows.useCallback[getRowGroupChildren]"]);
            }
            return children;
        }
    }["useGridRows.useCallback[getRowGroupChildren]"], [
        apiRef
    ]);
    const setRowIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[setRowIndex]": (rowId, targetIndex)=>{
            const node = apiRef.current.getRowNode(rowId);
            if (!node) {
                throw new Error(`MUI X: No row with id #${rowId} found.`);
            }
            if (node.parent !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"]) {
                throw new Error(`MUI X: The row reordering do not support reordering of grouped rows yet.`);
            }
            if (node.type !== 'leaf') {
                throw new Error(`MUI X: The row reordering do not support reordering of footer or grouping rows.`);
            }
            apiRef.current.setState({
                "useGridRows.useCallback[setRowIndex]": (state)=>{
                    const group = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowTreeSelector"])(state, apiRef.current.instanceId)[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"]];
                    const allRows = group.children;
                    const oldIndex = allRows.findIndex({
                        "useGridRows.useCallback[setRowIndex].oldIndex": (row)=>row === rowId
                    }["useGridRows.useCallback[setRowIndex].oldIndex"]);
                    if (oldIndex === -1 || oldIndex === targetIndex) {
                        return state;
                    }
                    logger.debug(`Moving row ${rowId} to index ${targetIndex}`);
                    const updatedRows = [
                        ...allRows
                    ];
                    updatedRows.splice(targetIndex, 0, updatedRows.splice(oldIndex, 1)[0]);
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                        rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.rows, {
                            tree: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.rows.tree, {
                                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"]]: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, group, {
                                    children: updatedRows
                                })
                            })
                        })
                    });
                }
            }["useGridRows.useCallback[setRowIndex]"]);
            apiRef.current.publishEvent('rowsSet');
        }
    }["useGridRows.useCallback[setRowIndex]"], [
        apiRef,
        logger
    ]);
    const replaceRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[replaceRows]": (firstRowToRender, newRows)=>{
            if (props.signature === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridSignature"].DataGrid && newRows.length > 1) {
                throw new Error([
                    'MUI X: You cannot replace rows using `apiRef.current.unstable_replaceRows` on the DataGrid.',
                    'You need to upgrade to DataGridPro or DataGridPremium component to unlock this feature.'
                ].join('\n'));
            }
            if (newRows.length === 0) {
                return;
            }
            const treeDepth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowMaximumTreeDepthSelector"])(apiRef);
            if (treeDepth > 1) {
                throw new Error('`apiRef.current.unstable_replaceRows` is not compatible with tree data and row grouping');
            }
            const tree = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowTreeSelector"])(apiRef));
            const dataRowIdToModelLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowsLookupSelector"])(apiRef));
            const dataRowIdToIdLookup = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowsDataRowIdToIdLookupSelector"])(apiRef));
            const rootGroup = tree[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"]];
            const rootGroupChildren = [
                ...rootGroup.children
            ];
            const seenIds = new Set();
            for(let i = 0; i < newRows.length; i += 1){
                const rowModel = newRows[i];
                const rowId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRowIdFromRowModel"])(rowModel, props.getRowId, 'A row was provided without id when calling replaceRows().');
                const [removedRowId] = rootGroupChildren.splice(firstRowToRender + i, 1, rowId);
                if (!seenIds.has(removedRowId)) {
                    delete dataRowIdToModelLookup[removedRowId];
                    delete dataRowIdToIdLookup[removedRowId];
                    delete tree[removedRowId];
                }
                const rowTreeNodeConfig = {
                    id: rowId,
                    depth: 0,
                    parent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"],
                    type: 'leaf',
                    groupingKey: null
                };
                dataRowIdToModelLookup[rowId] = rowModel;
                dataRowIdToIdLookup[rowId] = rowId;
                tree[rowId] = rowTreeNodeConfig;
                seenIds.add(rowId);
            }
            tree[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_ROOT_GROUP_ID"]] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, rootGroup, {
                children: rootGroupChildren
            });
            // Removes potential remaining skeleton rows from the dataRowIds.
            const dataRowIds = rootGroupChildren.filter({
                "useGridRows.useCallback[replaceRows].dataRowIds": (childId)=>tree[childId]?.type === 'leaf'
            }["useGridRows.useCallback[replaceRows].dataRowIds"]);
            apiRef.current.caches.rows.dataRowIdToModelLookup = dataRowIdToModelLookup;
            apiRef.current.caches.rows.dataRowIdToIdLookup = dataRowIdToIdLookup;
            apiRef.current.setState({
                "useGridRows.useCallback[replaceRows]": (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                        rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.rows, {
                            dataRowIdToModelLookup,
                            dataRowIdToIdLookup,
                            dataRowIds,
                            tree
                        })
                    })
            }["useGridRows.useCallback[replaceRows]"]);
            apiRef.current.publishEvent('rowsSet');
        }
    }["useGridRows.useCallback[replaceRows]"], [
        apiRef,
        props.signature,
        props.getRowId
    ]);
    const rowApi = {
        getRow,
        setLoading,
        getRowId,
        getRowModels,
        getRowsCount,
        getAllRowIds,
        setRows,
        updateRows,
        getRowNode,
        getRowIndexRelativeToVisibleRows,
        unstable_replaceRows: replaceRows
    };
    const rowProApi = {
        setRowIndex,
        setRowChildrenExpansion,
        getRowGroupChildren
    };
    const rowProPrivateApi = {
        updateServerRows
    };
    /**
   * EVENTS
   */ const groupRows = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[groupRows]": ()=>{
            logger.info(`Row grouping pre-processing have changed, regenerating the row tree`);
            let cache;
            if (apiRef.current.caches.rows.rowsBeforePartialUpdates === props.rows) {
                // The `props.rows` did not change since the last row grouping
                // We can use the current rows cache which contains the partial updates done recently.
                cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, apiRef.current.caches.rows, {
                    updates: {
                        type: 'full',
                        rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDataRowIdsSelector"])(apiRef)
                    }
                });
            } else {
                // The `props.rows` has changed since the last row grouping
                // We must use the new `props.rows` on the new grouping
                // This occurs because this event is triggered before the `useEffect` on the rows when both the grouping pre-processing and the rows changes on the same render
                cache = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRowsInternalCache"])({
                    rows: props.rows,
                    getRowId: props.getRowId,
                    loading: props.loading,
                    rowCount: props.rowCount
                });
            }
            throttledRowsChange({
                cache,
                throttle: false
            });
        }
    }["useGridRows.useCallback[groupRows]"], [
        logger,
        apiRef,
        props.rows,
        props.getRowId,
        props.loading,
        props.rowCount,
        throttledRowsChange
    ]);
    const previousDataSource = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useGridRows.useLazyRef[previousDataSource]": ()=>props.unstable_dataSource
    }["useGridRows.useLazyRef[previousDataSource]"]);
    const handleStrategyProcessorChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[handleStrategyProcessorChange]": (methodName)=>{
            if (props.unstable_dataSource && props.unstable_dataSource !== previousDataSource.current) {
                previousDataSource.current = props.unstable_dataSource;
                return;
            }
            if (methodName === 'rowTreeCreation') {
                groupRows();
            }
        }
    }["useGridRows.useCallback[handleStrategyProcessorChange]"], [
        groupRows,
        previousDataSource,
        props.unstable_dataSource
    ]);
    const handleStrategyActivityChange = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[handleStrategyActivityChange]": ()=>{
            // `rowTreeCreation` is the only processor ran when `strategyAvailabilityChange` is fired.
            // All the other processors listen to `rowsSet` which will be published by the `groupRows` method below.
            if (apiRef.current.getActiveStrategy('rowTree') !== (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowGroupingNameSelector"])(apiRef)) {
                groupRows();
            }
        }
    }["useGridRows.useCallback[handleStrategyActivityChange]"], [
        apiRef,
        groupRows
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiEventHandler"])(apiRef, 'activeStrategyProcessorChange', handleStrategyProcessorChange);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiEventHandler"])(apiRef, 'strategyAvailabilityChange', handleStrategyActivityChange);
    /**
   * APPLIERS
   */ const applyHydrateRowsProcessor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRows.useCallback[applyHydrateRowsProcessor]": ()=>{
            apiRef.current.setState({
                "useGridRows.useCallback[applyHydrateRowsProcessor]": (state)=>{
                    const response = apiRef.current.unstable_applyPipeProcessors('hydrateRows', {
                        tree: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowTreeSelector"])(state, apiRef.current.instanceId),
                        treeDepths: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowTreeDepthsSelector"])(state, apiRef.current.instanceId),
                        dataRowIds: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDataRowIdsSelector"])(state, apiRef.current.instanceId),
                        dataRowIdToModelLookup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowsLookupSelector"])(state, apiRef.current.instanceId),
                        dataRowIdToIdLookup: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowsDataRowIdToIdLookupSelector"])(state, apiRef.current.instanceId)
                    });
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                        rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.rows, response, {
                            totalTopLevelRowCount: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTopLevelRowCount"])({
                                tree: response.tree,
                                rowCountProp: props.rowCount
                            })
                        })
                    });
                }
            }["useGridRows.useCallback[applyHydrateRowsProcessor]"]);
            apiRef.current.publishEvent('rowsSet');
            apiRef.current.forceUpdate();
        }
    }["useGridRows.useCallback[applyHydrateRowsProcessor]"], [
        apiRef,
        props.rowCount
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$pipeProcessing$2f$useGridRegisterPipeApplier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridRegisterPipeApplier"])(apiRef, 'hydrateRows', applyHydrateRowsProcessor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiMethod"])(apiRef, rowApi, 'public');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiMethod"])(apiRef, rowProApi, props.signature === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GridSignature"].DataGrid ? 'private' : 'public');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiMethod"])(apiRef, rowProPrivateApi, 'private');
    // The effect do not track any value defined synchronously during the 1st render by hooks called after `useGridRows`
    // As a consequence, the state generated by the 1st run of this useEffect will always be equal to the initialization one
    const isFirstRender = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(true);
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useGridRows.useEffect": ()=>{
            if (isFirstRender.current) {
                isFirstRender.current = false;
                return;
            }
            let isRowCountPropUpdated = false;
            if (props.rowCount !== lastRowCount.current) {
                isRowCountPropUpdated = true;
                lastRowCount.current = props.rowCount;
            }
            const areNewRowsAlreadyInState = apiRef.current.caches.rows.rowsBeforePartialUpdates === props.rows;
            const isNewLoadingAlreadyInState = apiRef.current.caches.rows.loadingPropBeforePartialUpdates === props.loading;
            const isNewRowCountAlreadyInState = apiRef.current.caches.rows.rowCountPropBeforePartialUpdates === props.rowCount;
            // The new rows have already been applied (most likely in the `'rowGroupsPreProcessingChange'` listener)
            if (areNewRowsAlreadyInState) {
                // If the loading prop has changed, we need to update its value in the state because it won't be done by `throttledRowsChange`
                if (!isNewLoadingAlreadyInState) {
                    apiRef.current.setState({
                        "useGridRows.useEffect": (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                                rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.rows, {
                                    loading: props.loading
                                })
                            })
                    }["useGridRows.useEffect"]);
                    apiRef.current.caches.rows.loadingPropBeforePartialUpdates = props.loading;
                    apiRef.current.forceUpdate();
                }
                if (!isNewRowCountAlreadyInState) {
                    apiRef.current.setState({
                        "useGridRows.useEffect": (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                                rows: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state.rows, {
                                    totalRowCount: Math.max(props.rowCount || 0, state.rows.totalRowCount),
                                    totalTopLevelRowCount: Math.max(props.rowCount || 0, state.rows.totalTopLevelRowCount)
                                })
                            })
                    }["useGridRows.useEffect"]);
                    apiRef.current.caches.rows.rowCountPropBeforePartialUpdates = props.rowCount;
                    apiRef.current.forceUpdate();
                }
                if (!isRowCountPropUpdated) {
                    return;
                }
            }
            logger.debug(`Updating all rows, new length ${props.rows?.length}`);
            throttledRowsChange({
                cache: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRowsInternalCache"])({
                    rows: props.rows,
                    getRowId: props.getRowId,
                    loading: props.loading,
                    rowCount: props.rowCount
                }),
                throttle: false
            });
        }
    }["useGridRows.useEffect"], [
        props.rows,
        props.rowCount,
        props.getRowId,
        props.loading,
        logger,
        throttledRowsChange,
        apiRef
    ]);
};
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowSpanningUtils.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "getCellValue": (()=>getCellValue),
    "getUnprocessedRange": (()=>getUnprocessedRange),
    "isRowContextInitialized": (()=>isRowContextInitialized),
    "isRowRangeUpdated": (()=>isRowRangeUpdated)
});
function getUnprocessedRange(testRange, processedRange) {
    if (testRange.firstRowIndex >= processedRange.firstRowIndex && testRange.lastRowIndex <= processedRange.lastRowIndex) {
        return null;
    }
    // Overflowing at the end
    // Example: testRange={ firstRowIndex: 10, lastRowIndex: 20 }, processedRange={ firstRowIndex: 0, lastRowIndex: 15 }
    // Unprocessed Range={ firstRowIndex: 16, lastRowIndex: 20 }
    if (testRange.firstRowIndex >= processedRange.firstRowIndex && testRange.lastRowIndex > processedRange.lastRowIndex) {
        return {
            firstRowIndex: processedRange.lastRowIndex,
            lastRowIndex: testRange.lastRowIndex
        };
    }
    // Overflowing at the beginning
    // Example: testRange={ firstRowIndex: 0, lastRowIndex: 20 }, processedRange={ firstRowIndex: 16, lastRowIndex: 30 }
    // Unprocessed Range={ firstRowIndex: 0, lastRowIndex: 15 }
    if (testRange.firstRowIndex < processedRange.firstRowIndex && testRange.lastRowIndex <= processedRange.lastRowIndex) {
        return {
            firstRowIndex: testRange.firstRowIndex,
            lastRowIndex: processedRange.firstRowIndex - 1
        };
    }
    // TODO: Should return two ranges handle overflowing at both ends ?
    return testRange;
}
function isRowContextInitialized(renderContext) {
    return renderContext.firstRowIndex !== 0 || renderContext.lastRowIndex !== 0;
}
function isRowRangeUpdated(range1, range2) {
    return range1.firstRowIndex !== range2.firstRowIndex || range1.lastRowIndex !== range2.lastRowIndex;
}
const getCellValue = (row, colDef, apiRef)=>{
    if (!row) {
        return null;
    }
    let cellValue = row[colDef.field];
    const valueGetter = colDef.rowSpanValueGetter ?? colDef.valueGetter;
    if (valueGetter) {
        cellValue = valueGetter(cellValue, row, colDef, apiRef);
    }
    return cellValue;
};
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowSpanning.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "rowSpanningStateInitializer": (()=>rowSpanningStateInitializer),
    "useGridRowSpanning": (()=>useGridRowSpanning)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$colDef$2f$gridCheckboxSelectionColDef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/colDef/gridCheckboxSelectionColDef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$internals$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/internals/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowSpanningUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowSpanningUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$pagination$2f$gridPaginationSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/pagination/gridPaginationSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridVisibleRows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridVisibleRows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/columns/gridColumnsSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridVirtualizationSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/virtualization/gridVirtualizationSelectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridApiEventHandler.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/utils.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
const EMPTY_STATE = {
    spannedCells: {},
    hiddenCells: {},
    hiddenCellOriginMap: {}
};
const EMPTY_RANGE = {
    firstRowIndex: 0,
    lastRowIndex: 0
};
const skippedFields = new Set([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$colDef$2f$gridCheckboxSelectionColDef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_CHECKBOX_SELECTION_FIELD"],
    '__reorder__',
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$internals$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["GRID_DETAIL_PANEL_TOGGLE_FIELD"]
]);
/**
 * Default number of rows to process during state initialization to avoid flickering.
 * Number `20` is arbitrarily chosen to be large enough to cover most of the cases without
 * compromising performance.
 */ const DEFAULT_ROWS_TO_PROCESS = 20;
const computeRowSpanningState = (apiRef, colDefs, visibleRows, range, rangeToProcess, resetState, processedRange)=>{
    const spannedCells = resetState ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, apiRef.current.state.rowSpanning.spannedCells);
    const hiddenCells = resetState ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, apiRef.current.state.rowSpanning.hiddenCells);
    const hiddenCellOriginMap = resetState ? {} : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, apiRef.current.state.rowSpanning.hiddenCellOriginMap);
    if (resetState) {
        processedRange = EMPTY_RANGE;
    }
    colDefs.forEach((colDef)=>{
        if (skippedFields.has(colDef.field)) {
            return;
        }
        for(let index = rangeToProcess.firstRowIndex; index < rangeToProcess.lastRowIndex; index += 1){
            const row = visibleRows[index];
            if (hiddenCells[row.id]?.[colDef.field]) {
                continue;
            }
            const cellValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowSpanningUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellValue"])(row.model, colDef, apiRef);
            if (cellValue == null) {
                continue;
            }
            let spannedRowId = row.id;
            let spannedRowIndex = index;
            let rowSpan = 0;
            // For first index, also scan in the previous rows to handle the reset state case e.g by sorting
            const backwardsHiddenCells = [];
            if (index === rangeToProcess.firstRowIndex) {
                let prevIndex = index - 1;
                let prevRowEntry = visibleRows[prevIndex];
                while(prevIndex >= range.firstRowIndex && prevRowEntry && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowSpanningUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellValue"])(prevRowEntry.model, colDef, apiRef) === cellValue){
                    const currentRow = visibleRows[prevIndex + 1];
                    if (hiddenCells[currentRow.id]) {
                        hiddenCells[currentRow.id][colDef.field] = true;
                    } else {
                        hiddenCells[currentRow.id] = {
                            [colDef.field]: true
                        };
                    }
                    backwardsHiddenCells.push(index);
                    rowSpan += 1;
                    spannedRowId = prevRowEntry.id;
                    spannedRowIndex = prevIndex;
                    prevIndex -= 1;
                    prevRowEntry = visibleRows[prevIndex];
                }
            }
            backwardsHiddenCells.forEach((hiddenCellIndex)=>{
                if (hiddenCellOriginMap[hiddenCellIndex]) {
                    hiddenCellOriginMap[hiddenCellIndex][colDef.field] = spannedRowIndex;
                } else {
                    hiddenCellOriginMap[hiddenCellIndex] = {
                        [colDef.field]: spannedRowIndex
                    };
                }
            });
            // Scan the next rows
            let relativeIndex = index + 1;
            while(relativeIndex <= range.lastRowIndex && visibleRows[relativeIndex] && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowSpanningUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCellValue"])(visibleRows[relativeIndex].model, colDef, apiRef) === cellValue){
                const currentRow = visibleRows[relativeIndex];
                if (hiddenCells[currentRow.id]) {
                    hiddenCells[currentRow.id][colDef.field] = true;
                } else {
                    hiddenCells[currentRow.id] = {
                        [colDef.field]: true
                    };
                }
                if (hiddenCellOriginMap[relativeIndex]) {
                    hiddenCellOriginMap[relativeIndex][colDef.field] = spannedRowIndex;
                } else {
                    hiddenCellOriginMap[relativeIndex] = {
                        [colDef.field]: spannedRowIndex
                    };
                }
                relativeIndex += 1;
                rowSpan += 1;
            }
            if (rowSpan > 0) {
                if (spannedCells[spannedRowId]) {
                    spannedCells[spannedRowId][colDef.field] = rowSpan + 1;
                } else {
                    spannedCells[spannedRowId] = {
                        [colDef.field]: rowSpan + 1
                    };
                }
            }
        }
        processedRange = {
            firstRowIndex: Math.min(processedRange.firstRowIndex, rangeToProcess.firstRowIndex),
            lastRowIndex: Math.max(processedRange.lastRowIndex, rangeToProcess.lastRowIndex)
        };
    });
    return {
        spannedCells,
        hiddenCells,
        hiddenCellOriginMap,
        processedRange
    };
};
const getInitialRangeToProcess = (props, apiRef)=>{
    const rowCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDataRowIdsSelector"])(apiRef).length;
    if (props.pagination) {
        const pageSize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$pagination$2f$gridPaginationSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridPageSizeSelector"])(apiRef);
        let paginationLastRowIndex = DEFAULT_ROWS_TO_PROCESS;
        if (pageSize > 0) {
            paginationLastRowIndex = pageSize - 1;
        }
        return {
            firstRowIndex: 0,
            lastRowIndex: Math.min(paginationLastRowIndex, rowCount)
        };
    }
    return {
        firstRowIndex: 0,
        lastRowIndex: Math.min(DEFAULT_ROWS_TO_PROCESS, rowCount)
    };
};
const rowSpanningStateInitializer = (state, props, apiRef)=>{
    if (!props.unstable_rowSpanning) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
            rowSpanning: EMPTY_STATE
        });
    }
    const rowIds = state.rows.dataRowIds || [];
    const orderedFields = state.columns.orderedFields || [];
    const dataRowIdToModelLookup = state.rows.dataRowIdToModelLookup;
    const columnsLookup = state.columns.lookup;
    const isFilteringPending = Boolean(state.filter.filterModel.items.length) || Boolean(state.filter.filterModel.quickFilterValues?.length);
    if (!rowIds.length || !orderedFields.length || !dataRowIdToModelLookup || !columnsLookup || isFilteringPending) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
            rowSpanning: EMPTY_STATE
        });
    }
    const rangeToProcess = getInitialRangeToProcess(props, apiRef);
    const rows = rowIds.map((id)=>({
            id,
            model: dataRowIdToModelLookup[id]
        }));
    const colDefs = orderedFields.map((field)=>columnsLookup[field]);
    const { spannedCells, hiddenCells, hiddenCellOriginMap } = computeRowSpanningState(apiRef, colDefs, rows, rangeToProcess, rangeToProcess, true, EMPTY_RANGE);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
        rowSpanning: {
            spannedCells,
            hiddenCells,
            hiddenCellOriginMap
        }
    });
};
const useGridRowSpanning = (apiRef, props)=>{
    const processedRange = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useGridRowSpanning.useLazyRef[processedRange]": ()=>{
            return apiRef.current.state.rowSpanning !== EMPTY_STATE ? getInitialRangeToProcess(props, apiRef) : EMPTY_RANGE;
        }
    }["useGridRowSpanning.useLazyRef[processedRange]"]);
    const updateRowSpanningState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRowSpanning.useCallback[updateRowSpanningState]": (renderContext, resetState = false)=>{
            const { range, rows: visibleRows } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridVisibleRows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getVisibleRows"])(apiRef, {
                pagination: props.pagination,
                paginationMode: props.paginationMode
            });
            if (range === null || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowSpanningUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRowContextInitialized"])(renderContext)) {
                return;
            }
            if (resetState) {
                processedRange.current = EMPTY_RANGE;
            }
            const rangeToProcess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowSpanningUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUnprocessedRange"])({
                firstRowIndex: renderContext.firstRowIndex,
                lastRowIndex: Math.min(renderContext.lastRowIndex, range.lastRowIndex + 1)
            }, processedRange.current);
            if (rangeToProcess === null) {
                return;
            }
            const colDefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$columns$2f$gridColumnsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridVisibleColumnDefinitionsSelector"])(apiRef);
            const { spannedCells, hiddenCells, hiddenCellOriginMap, processedRange: newProcessedRange } = computeRowSpanningState(apiRef, colDefs, visibleRows, range, rangeToProcess, resetState, processedRange.current);
            processedRange.current = newProcessedRange;
            const newSpannedCellsCount = Object.keys(spannedCells).length;
            const newHiddenCellsCount = Object.keys(hiddenCells).length;
            const currentSpannedCellsCount = Object.keys(apiRef.current.state.rowSpanning.spannedCells).length;
            const currentHiddenCellsCount = Object.keys(apiRef.current.state.rowSpanning.hiddenCells).length;
            const shouldUpdateState = resetState || newSpannedCellsCount !== currentSpannedCellsCount || newHiddenCellsCount !== currentHiddenCellsCount;
            const hasNoSpannedCells = newSpannedCellsCount === 0 && currentSpannedCellsCount === 0;
            if (!shouldUpdateState || hasNoSpannedCells) {
                return;
            }
            apiRef.current.setState({
                "useGridRowSpanning.useCallback[updateRowSpanningState]": (state)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                        rowSpanning: {
                            spannedCells,
                            hiddenCells,
                            hiddenCellOriginMap
                        }
                    });
                }
            }["useGridRowSpanning.useCallback[updateRowSpanningState]"]);
        }
    }["useGridRowSpanning.useCallback[updateRowSpanningState]"], [
        apiRef,
        processedRange,
        props.pagination,
        props.paginationMode
    ]);
    // Reset events trigger a full re-computation of the row spanning state:
    // - The `unstable_rowSpanning` prop is updated (feature flag)
    // - The filtering is applied
    // - The sorting is applied
    // - The `paginationModel` is updated
    // - The rows are updated
    const resetRowSpanningState = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRowSpanning.useCallback[resetRowSpanningState]": ()=>{
            const renderContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$virtualization$2f$gridVirtualizationSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRenderContextSelector"])(apiRef);
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowSpanningUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRowContextInitialized"])(renderContext)) {
                return;
            }
            updateRowSpanningState(renderContext, true);
        }
    }["useGridRowSpanning.useCallback[resetRowSpanningState]"], [
        apiRef,
        updateRowSpanningState
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiEventHandler"])(apiRef, 'renderedRowsIntervalChange', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runIf"])(props.unstable_rowSpanning, updateRowSpanningState));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiEventHandler"])(apiRef, 'sortedRowsSet', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runIf"])(props.unstable_rowSpanning, resetRowSpanningState));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiEventHandler"])(apiRef, 'paginationModelChange', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runIf"])(props.unstable_rowSpanning, resetRowSpanningState));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiEventHandler"])(apiRef, 'filteredRowsSet', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runIf"])(props.unstable_rowSpanning, resetRowSpanningState));
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiEventHandler$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiEventHandler"])(apiRef, 'columnsChange', (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["runIf"])(props.unstable_rowSpanning, resetRowSpanningState));
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect({
        "useGridRowSpanning.useEffect": ()=>{
            if (!props.unstable_rowSpanning) {
                if (apiRef.current.state.rowSpanning !== EMPTY_STATE) {
                    apiRef.current.setState({
                        "useGridRowSpanning.useEffect": (state)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                                rowSpanning: EMPTY_STATE
                            })
                    }["useGridRowSpanning.useEffect"]);
                }
            } else if (apiRef.current.state.rowSpanning === EMPTY_STATE) {
                resetRowSpanningState();
            }
        }
    }["useGridRowSpanning.useEffect"], [
        apiRef,
        resetRowSpanningState,
        props.unstable_rowSpanning
    ]);
};
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/useGridRowsMeta.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "rowsMetaStateInitializer": (()=>rowsMetaStateInitializer),
    "useGridRowsMeta": (()=>useGridRowsMeta)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@babel+runtime@7.26.9/node_modules/@babel/runtime/helpers/esm/extends.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/dimensions/gridDimensionsSelectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$pagination$2f$gridPaginationSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/pagination/gridPaginationSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$density$2f$densitySelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/density/densitySelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridVisibleRows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridVisibleRows.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/gridRowsUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$ResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/ResizeObserver.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$pipeProcessing$2f$useGridRegisterPipeApplier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/core/pipeProcessing/useGridRegisterPipeApplier.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEnhancedEffect$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+utils@6.4.3_@types+react@19.0.10_react@19.0.0/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js [app-client] (ecmascript) <export default as unstable_useEnhancedEffect>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridApiMethod.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const rowsMetaStateInitializer = (state, props, apiRef)=>{
    apiRef.current.caches.rowsMeta = {
        heights: new Map()
    };
    const baseRowHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowHeightSelector"])(apiRef.current.state);
    const dataRowCount = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowCountSelector"])(apiRef);
    const pagination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$pagination$2f$gridPaginationSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridPaginationSelector"])(apiRef.current.state);
    const rowCount = Math.min(pagination.enabled ? pagination.paginationModel.pageSize : dataRowCount, dataRowCount);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
        rowsMeta: {
            currentPageTotalHeight: rowCount * baseRowHeight,
            positions: Array.from({
                length: rowCount
            }, (_, i)=>i * baseRowHeight),
            pinnedTopRowsTotalHeight: 0,
            pinnedBottomRowsTotalHeight: 0
        }
    });
};
const useGridRowsMeta = (apiRef, props)=>{
    const { getRowHeight: getRowHeightProp, getRowSpacing, getEstimatedRowHeight } = props;
    const heightCache = apiRef.current.caches.rowsMeta.heights;
    const lastMeasuredRowIndex = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(-1);
    const hasRowWithAutoHeight = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const isHeightMetaValid = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(false);
    const densityFactor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$density$2f$densitySelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDensityFactorSelector"]);
    const currentPage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridVisibleRows$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridVisibleRows"])(apiRef, props);
    const pinnedRows = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridPinnedRowsSelector"]);
    const rowHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridSelector"])(apiRef, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridRowHeightSelector"]);
    const getRowHeightEntry = (rowId)=>{
        let entry = heightCache.get(rowId);
        if (entry === undefined) {
            entry = {
                content: rowHeight,
                spacingTop: 0,
                spacingBottom: 0,
                detail: 0,
                autoHeight: false,
                needsFirstMeasurement: true
            };
            heightCache.set(rowId, entry);
        }
        return entry;
    };
    const processHeightEntry = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRowsMeta.useCallback[processHeightEntry]": (row)=>{
            // HACK: rowHeight trails behind the most up-to-date value just enough to
            // mess the initial rowsMeta hydration :/
            const baseRowHeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$dimensions$2f$gridDimensionsSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridDimensionsSelector"])(apiRef.current.state).rowHeight;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eslintUseValue"])(rowHeight);
            const entry = apiRef.current.getRowHeightEntry(row.id);
            if (!getRowHeightProp) {
                entry.content = baseRowHeight;
                entry.needsFirstMeasurement = false;
            } else {
                const rowHeightFromUser = getRowHeightProp((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, row, {
                    densityFactor
                }));
                if (rowHeightFromUser === 'auto') {
                    if (entry.needsFirstMeasurement) {
                        const estimatedRowHeight = getEstimatedRowHeight ? getEstimatedRowHeight((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, row, {
                            densityFactor
                        })) : baseRowHeight;
                        // If the row was not measured yet use the estimated row height
                        entry.content = estimatedRowHeight ?? baseRowHeight;
                    }
                    hasRowWithAutoHeight.current = true;
                    entry.autoHeight = true;
                } else {
                    // Default back to base rowHeight if getRowHeight returns invalid value.
                    entry.content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getValidRowHeight"])(rowHeightFromUser, baseRowHeight, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$rows$2f$gridRowsUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRowHeightWarning"]);
                    entry.needsFirstMeasurement = false;
                    entry.autoHeight = false;
                }
            }
            if (getRowSpacing) {
                const indexRelativeToCurrentPage = apiRef.current.getRowIndexRelativeToVisibleRows(row.id);
                const spacing = getRowSpacing((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, row, {
                    isFirstVisible: indexRelativeToCurrentPage === 0,
                    isLastVisible: indexRelativeToCurrentPage === currentPage.rows.length - 1,
                    indexRelativeToCurrentPage
                }));
                entry.spacingTop = spacing.top ?? 0;
                entry.spacingBottom = spacing.bottom ?? 0;
            } else {
                entry.spacingTop = 0;
                entry.spacingBottom = 0;
            }
            apiRef.current.unstable_applyPipeProcessors('rowHeight', entry, row);
            return entry;
        }
    }["useGridRowsMeta.useCallback[processHeightEntry]"], [
        apiRef,
        currentPage.rows,
        getRowHeightProp,
        getEstimatedRowHeight,
        rowHeight,
        getRowSpacing,
        densityFactor
    ]);
    const hydrateRowsMeta = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridRowsMeta.useCallback[hydrateRowsMeta]": ()=>{
            hasRowWithAutoHeight.current = false;
            const pinnedTopRowsTotalHeight = pinnedRows.top.reduce({
                "useGridRowsMeta.useCallback[hydrateRowsMeta].pinnedTopRowsTotalHeight": (acc, row)=>{
                    const entry = processHeightEntry(row);
                    return acc + entry.content + entry.spacingTop + entry.spacingBottom + entry.detail;
                }
            }["useGridRowsMeta.useCallback[hydrateRowsMeta].pinnedTopRowsTotalHeight"], 0);
            const pinnedBottomRowsTotalHeight = pinnedRows.bottom.reduce({
                "useGridRowsMeta.useCallback[hydrateRowsMeta].pinnedBottomRowsTotalHeight": (acc, row)=>{
                    const entry = processHeightEntry(row);
                    return acc + entry.content + entry.spacingTop + entry.spacingBottom + entry.detail;
                }
            }["useGridRowsMeta.useCallback[hydrateRowsMeta].pinnedBottomRowsTotalHeight"], 0);
            const positions = [];
            const currentPageTotalHeight = currentPage.rows.reduce({
                "useGridRowsMeta.useCallback[hydrateRowsMeta].currentPageTotalHeight": (acc, row)=>{
                    positions.push(acc);
                    const entry = processHeightEntry(row);
                    const total = entry.content + entry.spacingTop + entry.spacingBottom + entry.detail;
                    return acc + total;
                }
            }["useGridRowsMeta.useCallback[hydrateRowsMeta].currentPageTotalHeight"], 0);
            if (!hasRowWithAutoHeight.current) {
                // No row has height=auto, so all rows are already measured
                lastMeasuredRowIndex.current = Infinity;
            }
            const didHeightsChange = pinnedTopRowsTotalHeight !== apiRef.current.state.rowsMeta.pinnedTopRowsTotalHeight || pinnedBottomRowsTotalHeight !== apiRef.current.state.rowsMeta.pinnedBottomRowsTotalHeight || currentPageTotalHeight !== apiRef.current.state.rowsMeta.currentPageTotalHeight;
            const rowsMeta = {
                currentPageTotalHeight,
                positions,
                pinnedTopRowsTotalHeight,
                pinnedBottomRowsTotalHeight
            };
            apiRef.current.setState({
                "useGridRowsMeta.useCallback[hydrateRowsMeta]": (state)=>{
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$babel$2b$runtime$40$7$2e$26$2e$9$2f$node_modules$2f40$babel$2f$runtime$2f$helpers$2f$esm$2f$extends$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({}, state, {
                        rowsMeta
                    });
                }
            }["useGridRowsMeta.useCallback[hydrateRowsMeta]"]);
            if (didHeightsChange) {
                apiRef.current.updateDimensions();
            }
            isHeightMetaValid.current = true;
        }
    }["useGridRowsMeta.useCallback[hydrateRowsMeta]"], [
        apiRef,
        pinnedRows,
        currentPage.rows,
        processHeightEntry
    ]);
    const getRowHeight = (rowId)=>{
        return heightCache.get(rowId)?.content ?? rowHeight;
    };
    const storeRowHeightMeasurement = (id, height)=>{
        const entry = apiRef.current.getRowHeightEntry(id);
        const didChange = entry.content !== height;
        entry.needsFirstMeasurement = false;
        entry.content = height;
        isHeightMetaValid.current &&= !didChange;
    };
    const rowHasAutoHeight = (id)=>{
        return heightCache.get(id)?.autoHeight ?? false;
    };
    const getLastMeasuredRowIndex = ()=>{
        return lastMeasuredRowIndex.current;
    };
    const setLastMeasuredRowIndex = (index)=>{
        if (hasRowWithAutoHeight.current && index > lastMeasuredRowIndex.current) {
            lastMeasuredRowIndex.current = index;
        }
    };
    const resetRowHeights = ()=>{
        heightCache.clear();
        hydrateRowsMeta();
    };
    const resizeObserver = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useLazyRef$2f$useLazyRef$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])({
        "useGridRowsMeta.useLazyRef": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$ResizeObserver$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizeObserver"]({
                "useGridRowsMeta.useLazyRef": (entries)=>{
                    for(let i = 0; i < entries.length; i += 1){
                        const entry = entries[i];
                        const height = entry.borderBoxSize && entry.borderBoxSize.length > 0 ? entry.borderBoxSize[0].blockSize : entry.contentRect.height;
                        const rowId = entry.target.__mui_id;
                        apiRef.current.unstable_storeRowHeightMeasurement(rowId, height);
                    }
                    if (!isHeightMetaValid.current) {
                        apiRef.current.requestPipeProcessorsApplication('rowHeight');
                    }
                }
            }["useGridRowsMeta.useLazyRef"])
    }["useGridRowsMeta.useLazyRef"]).current;
    const observeRowHeight = (element, rowId)=>{
        element.__mui_id = rowId;
        resizeObserver.observe(element);
        return ()=>resizeObserver.unobserve(element);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$core$2f$pipeProcessing$2f$useGridRegisterPipeApplier$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridRegisterPipeApplier"])(apiRef, 'rowHeight', hydrateRowsMeta);
    // The effect is used to build the rows meta data - currentPageTotalHeight and positions.
    // Because of variable row height this is needed for the virtualization
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$utils$40$6$2e$4$2e$3_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0$2f$node_modules$2f40$mui$2f$utils$2f$esm$2f$useEnhancedEffect$2f$useEnhancedEffect$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__unstable_useEnhancedEffect$3e$__["unstable_useEnhancedEffect"])({
        "useGridRowsMeta.useEnhancedEffect": ()=>{
            hydrateRowsMeta();
        }
    }["useGridRowsMeta.useEnhancedEffect"], [
        hydrateRowsMeta
    ]);
    const rowsMetaApi = {
        unstable_getRowHeight: getRowHeight,
        unstable_setLastMeasuredRowIndex: setLastMeasuredRowIndex,
        unstable_storeRowHeightMeasurement: storeRowHeightMeasurement,
        resetRowHeights
    };
    const rowsMetaPrivateApi = {
        hydrateRowsMeta,
        observeRowHeight,
        rowHasAutoHeight,
        getRowHeightEntry,
        getLastMeasuredRowIndex
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiMethod"])(apiRef, rowsMetaApi, 'public');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiMethod"])(apiRef, rowsMetaPrivateApi, 'private');
};
}}),
"[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/rows/useGridParamsApi.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "MissingRowIdError": (()=>MissingRowIdError),
    "useGridParamsApi": (()=>useGridParamsApi)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.7_react-dom@19.0.0_react@19.0.0__react@19.0.0/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$focus$2f$gridFocusStateSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/focus/gridFocusStateSelector.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$listView$2f$gridListViewSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/features/listView/gridListViewSelectors.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$domUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/utils/domUtils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@mui+x-data-grid@7.27.0_@emotion+react@11.14.0_@types+react@19.0.10_react@19.0.0__@emot_0a137e96c821fabf96a335fb5438a83e/node_modules/@mui/x-data-grid/hooks/utils/useGridApiMethod.js [app-client] (ecmascript)");
;
;
;
;
;
class MissingRowIdError extends Error {
}
function useGridParamsApi(apiRef, props) {
    const getColumnHeaderParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getColumnHeaderParams]": (field)=>({
                field,
                colDef: apiRef.current.getColumn(field)
            })
    }["useGridParamsApi.useCallback[getColumnHeaderParams]"], [
        apiRef
    ]);
    const getRowParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getRowParams]": (id)=>{
            const row = apiRef.current.getRow(id);
            if (!row) {
                throw new MissingRowIdError(`No row with id #${id} found`);
            }
            const params = {
                id,
                columns: apiRef.current.getAllColumns(),
                row
            };
            return params;
        }
    }["useGridParamsApi.useCallback[getRowParams]"], [
        apiRef
    ]);
    const getCellParamsForRow = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getCellParamsForRow]": (id, field, row, { cellMode, colDef, hasFocus, rowNode, tabIndex })=>{
            const rawValue = row[field];
            const value = colDef?.valueGetter ? colDef.valueGetter(rawValue, row, colDef, apiRef) : rawValue;
            const params = {
                id,
                field,
                row,
                rowNode,
                colDef,
                cellMode,
                hasFocus,
                tabIndex,
                value,
                formattedValue: value,
                isEditable: false,
                api: null
            };
            if (colDef && colDef.valueFormatter) {
                params.formattedValue = colDef.valueFormatter(value, row, colDef, apiRef);
            }
            params.isEditable = colDef && apiRef.current.isCellEditable(params);
            return params;
        }
    }["useGridParamsApi.useCallback[getCellParamsForRow]"], [
        apiRef
    ]);
    const getCellParams = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getCellParams]": (id, field)=>{
            const row = apiRef.current.getRow(id);
            const rowNode = apiRef.current.getRowNode(id);
            if (!row || !rowNode) {
                throw new MissingRowIdError(`No row with id #${id} found`);
            }
            const cellFocus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$focus$2f$gridFocusStateSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridFocusCellSelector"])(apiRef);
            const cellTabIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$focus$2f$gridFocusStateSelector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridTabIndexCellSelector"])(apiRef);
            const cellMode = apiRef.current.getCellMode(id, field);
            return apiRef.current.getCellParamsForRow(id, field, row, {
                colDef: props.unstable_listView && props.unstable_listColumn?.field === field ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$features$2f$listView$2f$gridListViewSelectors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["gridListColumnSelector"])(apiRef.current.state) : apiRef.current.getColumn(field),
                rowNode,
                hasFocus: cellFocus !== null && cellFocus.field === field && cellFocus.id === id,
                tabIndex: cellTabIndex && cellTabIndex.field === field && cellTabIndex.id === id ? 0 : -1,
                cellMode
            });
        }
    }["useGridParamsApi.useCallback[getCellParams]"], [
        apiRef,
        props.unstable_listView,
        props.unstable_listColumn?.field
    ]);
    const getCellValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getCellValue]": (id, field)=>{
            const colDef = apiRef.current.getColumn(field);
            const row = apiRef.current.getRow(id);
            if (!row) {
                throw new MissingRowIdError(`No row with id #${id} found`);
            }
            if (!colDef || !colDef.valueGetter) {
                return row[field];
            }
            return colDef.valueGetter(row[colDef.field], row, colDef, apiRef);
        }
    }["useGridParamsApi.useCallback[getCellValue]"], [
        apiRef
    ]);
    const getRowValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getRowValue]": (row, colDef)=>{
            const field = colDef.field;
            if (!colDef || !colDef.valueGetter) {
                return row[field];
            }
            const value = row[colDef.field];
            return colDef.valueGetter(value, row, colDef, apiRef);
        }
    }["useGridParamsApi.useCallback[getRowValue]"], [
        apiRef
    ]);
    const getRowFormattedValue = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getRowFormattedValue]": (row, colDef)=>{
            const value = getRowValue(row, colDef);
            if (!colDef || !colDef.valueFormatter) {
                return value;
            }
            return colDef.valueFormatter(value, row, colDef, apiRef);
        }
    }["useGridParamsApi.useCallback[getRowFormattedValue]"], [
        apiRef,
        getRowValue
    ]);
    const getColumnHeaderElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getColumnHeaderElement]": (field)=>{
            if (!apiRef.current.rootElementRef.current) {
                return null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$domUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGridColumnHeaderElement"])(apiRef.current.rootElementRef.current, field);
        }
    }["useGridParamsApi.useCallback[getColumnHeaderElement]"], [
        apiRef
    ]);
    const getRowElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getRowElement]": (id)=>{
            if (!apiRef.current.rootElementRef.current) {
                return null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$domUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGridRowElement"])(apiRef.current.rootElementRef.current, id);
        }
    }["useGridParamsApi.useCallback[getRowElement]"], [
        apiRef
    ]);
    const getCellElement = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useCallback({
        "useGridParamsApi.useCallback[getCellElement]": (id, field)=>{
            if (!apiRef.current.rootElementRef.current) {
                return null;
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$utils$2f$domUtils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGridCellElement"])(apiRef.current.rootElementRef.current, {
                id,
                field
            });
        }
    }["useGridParamsApi.useCallback[getCellElement]"], [
        apiRef
    ]);
    const paramsApi = {
        getCellValue,
        getCellParams,
        getCellElement,
        getRowValue,
        getRowFormattedValue,
        getRowParams,
        getRowElement,
        getColumnHeaderParams,
        getColumnHeaderElement
    };
    const paramsPrivateApi = {
        getCellParamsForRow
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiMethod"])(apiRef, paramsApi, 'public');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$mui$2b$x$2d$data$2d$grid$40$7$2e$27$2e$0_$40$emotion$2b$react$40$11$2e$14$2e$0_$40$types$2b$react$40$19$2e$0$2e$10_react$40$19$2e$0$2e$0_$5f40$emot_0a137e96c821fabf96a335fb5438a83e$2f$node_modules$2f40$mui$2f$x$2d$data$2d$grid$2f$hooks$2f$utils$2f$useGridApiMethod$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGridApiMethod"])(apiRef, paramsPrivateApi, 'private');
}
}}),
}]);

//# sourceMappingURL=95a37_%40mui_x-data-grid_hooks_features_rows_37df59._.js.map