export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  // Inserts seed entries
  await knex('user').insert({
    id: 1,
    auth_id: 'auth0|68460dacafed1e95b1f4ce71',
    username: 'adminSP',
    email: 'michaelbeck1206@gmail.com',
  })

  await knex('recipe').del()
  await knex('recipe').insert({
    id: 1,
    created_by: 'auth0|68460dacafed1e95b1f4ce71',
    name: 'linguine alle vongole',
    description:
      'Classic pasta dish with a light white wine sauce and fresh clams.',
    img_url:
      'https://britishop.com/storage/imgcache/linguine-with-clams__1000x600xauto.jpg',
    hidden: true,
  })

  await knex('method').del()
  await knex('method').insert([
    {
      recipe_id: 1,
      step: 1,
      procedure:
        'Boil your linguine in hot water until al dente, strain and set aside.',
    },
    {
      recipe_id: 1,
      step: 2,
      procedure:
        'Wash the clams in cold water, rinse often to get rid of sand and grit.',
    },
    {
      recipe_id: 1,
      step: 3,
      procedure:
        'Saute garlics,chilli flakes, and cherry tomatoes in olive oil until fragrant.',
    },
    {
      recipe_id: 1,
      step: 4,
      procedure:
        'Add in the clams, give them a light stir then pour in the white wine.',
    },
    {
      recipe_id: 1,
      step: 5,
      procedure:
        'Lightly season before closing the pan with a lid, allowing the clams to steam in the white wine broth.',
    },
    {
      recipe_id: 1,
      step: 6,
      procedure: 'Once the clams are cooked, add in the linguine and season.',
    },
    {
      recipe_id: 1,
      step: 7,
      procedure: 'Finish with chopped parsley, and serve.',
    },
  ])
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {
      recipe_id: 1,
      ingredient_id: 1,
      name: 'linguine',
      amount: 200,
      metric: 'g',
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      name: 'white wine',
      amount: 100,
      metric: 'ml',
    },
    { recipe_id: 1, ingredient_id: 3, name: 'clams', amount: 500, metric: 'g' },
    { recipe_id: 1, ingredient_id: 4, name: 'garlic', amount: 30, metric: 'g' },
    {
      recipe_id: 1,
      ingredient_id: 5,
      name: 'english parsley',
      amount: 30,
      metric: 'g',
    },
    {
      recipe_id: 1,
      ingredient_id: 6,
      name: 'chilli flakes',
      amount: 10,
      metric: 'g',
    },
    {
      recipe_id: 1,
      ingredient_id: 7,
      name: 'cherry tomatoes',
      amount: 100,
      metric: 'g',
    },
    {
      recipe_id: 1,
      ingredient_id: 8,
      name: 'olive oil',
      amount: 50,
      metric: 'ml',
    },
  ])
}
