import antfu from '@antfu/eslint-config'
// import eslintConfigPrettier from 'eslint-config-prettier';
// import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default antfu(
  {
    rules: {
      // 'max-len': 180,
    },
    ignores: ['dist', 'node_modules'],
  },
  // {
  //   rules: {
  //     'prettier/prettier': ['off', { usePrettierrc: true }],
  //   },
  // },
  // eslintPluginPrettierRecommended,
  // eslintConfigPrettier,
)
