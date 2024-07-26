export function convertToDataSet(dataSet: Record<string, number>){
    return  Object.entries(dataSet).map(([world, count]) => ({
        world,
        count, //
    }));
} 

export function convertToDataSetForCircles(dataSet: Record<string, number>){ //nice LGTM
    return  Object.entries(dataSet).map(([world, count]) => ({
        label: world,
        value: count,
    }));
} 