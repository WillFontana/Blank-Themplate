function importIcons(r) {
  r.keys().forEach(r);
}

importIcons(require.context('../icons/', true, /\.svg$/));
