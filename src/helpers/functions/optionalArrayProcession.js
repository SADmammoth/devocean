export default function optionalArrayProcession(array, processors) {
  if (!processors) return array;
  let resultArray = array;
  let processorKey;
  let processorArguments;

  processors.forEach((processor) => {
    console.log(processor);
    [processorKey, processorArguments] = Object.entries(processor)[0];
    resultArray = resultArray[processorKey](...processorArguments);
  });

  return resultArray;
}
