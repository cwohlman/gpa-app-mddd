module.exports = function RenderListOfGrandkids(view, children) {
  const renderedView = 
`
<div class="list">
  ${children().join('  \n')}
</div>
`.trim();
  return renderedView;
}