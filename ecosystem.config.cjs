module.exports = {
  apps : [
    {
      name: 'express-crawling',
      script: './app.js',
      instance: 0,
      exec_interpreter: 'babel-node',
      exec_mode: 'cluster',
      merge_logs: true,
      watch: false
    }
  ]
};
