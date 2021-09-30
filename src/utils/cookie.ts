export const parse = (str: string): Record<string, string> => {
  const pairSplitRegExp = /; */;
  const obj = {} as Record<string, string>;
  const pairs = str.split(pairSplitRegExp);

  for (const pair of pairs) {
    let eqIndex = pair.indexOf("=");

    // skip things that don't look like key=value
    if (eqIndex < 0) {
      continue;
    }

    const key = pair.substr(0, eqIndex).trim();
    let val = pair.substr(++eqIndex, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (obj[key] === undefined) {
      obj[key] = decodeURIComponent(val);
    }
  }

  return obj;
};
