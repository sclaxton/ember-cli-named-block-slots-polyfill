function strEqModWhitespace(left, right) {
  return left.replace(/\s/g,'') === right.replace(/\s/g,'');
}

export function checkRenderCase(name) {
  const result = find(`#result-${name}`).text();
  const expected = find(`#expected-${name}`).text();

  return strEqModWhitespace(result, expected);
}
