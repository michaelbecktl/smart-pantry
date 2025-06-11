export async function up(knex) {
  return Promise.all([
    knex.schema.createTable('user', (table) => {
      table.increments('id').primary()
      table.string('auth_id')
      table.string('username', 30)
      table.string('displayname', 50)
      table.string('email', 80)
      table.timestamp('created_at').defaultTo(knex.fn.now())
    }),
    knex.schema.createTable('recipe', (table) => {
      table.increments('id').primary()
      table.string('created_by')
      table.string('name', 80)
      table.string('description')
      table.string('img_url')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.boolean('hidden').defaultTo(false)
    }),
    knex.schema.createTable('method', (table) => {
      table.integer('recipe_id').unsigned()
      table.foreign('recipe_id').references('recipe.id')
      table.integer('step').primary()
      table.string('procedure')
    }),
    // knex.schema.createTable('quantity', (table) => {
    //   table.integer('recipe_id').unsigned()
    //   table.foreign('recipe_id').references('recipe.id')
    //   table.integer('quantity_id').primary()
    //   table.string('metric')
    // }),
    knex.schema.createTable('ingredients', (table) => {
      table.integer('recipe_id').unsigned()
      table.foreign('recipe_id').references('recipe.id')
      table.integer('ingredient_id').primary()
      table.string('name')
      table.integer('amount')
      table.string('metric')
    }),
    knex.schema.createTable('ingredient_data', (table) => {
      table.string('name').primary()
      table.string('metric')
      table.string('month')
      table.decimal('data_cost', 10, 2)
      table.decimal('user_cost', 10, 2)
      table.decimal('avg_cost', 10, 2)
    }),
  ])
}

export async function down(knex) {
  return Promise.all([
    knex.schema.dropTable('ingredient_data'),
    knex.schema.dropTable('ingredients'),
    // knex.schema.dropTable('quantity'),
    knex.schema.dropTable('method'),
    knex.schema.dropTable('recipe'),
    knex.schema.dropTable('user'),
  ])
}
