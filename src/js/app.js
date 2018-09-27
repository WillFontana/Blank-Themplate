// import all icons
function importIcons(r) {
  r.keys().forEach(r);
}
importIcons(require.context('../icons/', true, /\.svg$/));

// sprite map
const displayIcons = document.getElementById('sprite-map');
const symbols = document.querySelectorAll('svg > symbol');
let icons = [];

symbols.forEach(item => icons = [ ...icons, item.getAttribute('id') ]);
if (displayIcons) displayIcons.innerHTML = icons.map(marckupIcon).join('\n');

function marckupIcon(id) {
  return `
    <div class="col-3 col-sm-1 _px-sm _py-sm">
      <div class="icon-sprite">
        <div class="content svg-icon _px-sm _py-sm">
          <svg><use xlink:href="#${id}" /></svg>
        </div>
      </div>
      <span class="heading typo-body-2 typo-color-dark-text-secondary _mt-sm _d-block _text-center _text-truncate">${id.replace('icon-', '')}</span>
    </div>
  `;
}
