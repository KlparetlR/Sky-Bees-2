events.listen('block.registry', event => {


event.create('valdanium_block').material('iron').hardness(50).displayName('瓦尔丹坭坶方块').requiresTool(true)
event.create('seed_ore').material('stone').hardness(2.0).displayName('矿石种子').requiresTool(true)
event.create('starlight_iron').material('stone').hardness(2.0).displayName('星辉灌注铁').requiresTool(true)
event.create('manainfused_coal').material('stone').hardness(2.0).displayName('魔力灌注煤').requiresTool(true)
event.create('dna_spawner').material('stone').hardness(2.0).displayName('DNA生成器').requiresTool(true).defaultCutout()





})
