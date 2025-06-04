export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('user').del()
  // Inserts seed entries
  await knex('user').insert({
    id: 1,
    username: 'adminSP',
    displayname: 'Michael Beck',
  })

  await knex('recipe').del()
  await knex('recipe').insert({
    id: 1,
    created_by: 1,
    name: 'linguine alle vongole',
    img_url:
      'https://britishop.com/storage/imgcache/linguine-with-clams__1000x600xauto.jpg',
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
}
