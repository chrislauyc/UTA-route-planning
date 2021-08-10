exports.seed = async function (knex) {
    await knex('users').insert([
      { username: 'CaptainAmerica', password: '$2y$14$tbXiGzQd.VpUPOUFoMRefeihG9i398gU.GosJa4.YG0XJ7IoXeQdS' },
      { username: 'BlackPanther', password: '$2y$14$tbXiGzQd.VpUPOUFoMRefeihG9i398gU.GosJa4.YG0XJ7IoXeQdS' },
      { username: 'TheHulk', password: '$2y$14$tbXiGzQd.VpUPOUFoMRefeihG9i398gU.GosJa4.YG0XJ7IoXeQdS' },
      { username: 'GreenLantern', password: '$2y$14$tbXiGzQd.VpUPOUFoMRefeihG9i398gU.GosJa4.YG0XJ7IoXeQdS' },
    ])
  };
  