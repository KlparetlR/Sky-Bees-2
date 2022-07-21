// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Hello, World! (每次重新加载服务器资源时，您都会看到这一行)')

onEvent('recipes', event => {

})

onEvent('item.tags', event => {
event.remove('forge:ores/lead', 'mekanism:lead_ore');
event.remove('forge:ores', 'mekanism:lead_ore');
event.remove('forge:ores/copper', 'mekanism:copper_ore');
event.remove('forge:ores', 'mekanism:copper_ore');
event.remove('forge:ores/tin', 'mekanism:tin_ore');
event.remove('forge:ores', 'mekanism:tin_ore')

})

onEvent('block.tags', event => {
  event.remove('forge:ores/lead', 'mekanism:lead_ore');
  event.remove('forge:ores', 'mekanism:lead_ore');
  event.remove('forge:ores/copper', 'mekanism:copper_ore');
  event.remove('forge:ores', 'mekanism:copper_ore');
  event.remove('forge:ores/tin', 'mekanism:tin_ore');
  event.remove('forge:ores', 'mekanism:tin_ore')
  })
