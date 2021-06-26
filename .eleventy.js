// 11ty config file
module.exports = function(eleventyPlugin) {
  console.log('call here')
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strict_filters: true
  })
}
