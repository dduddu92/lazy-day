module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:prettier/recommended', 'react-app'],
  plugins: ['prettier'],
  rules: {
    'no-var': 'warn', // var 금지
    'no-multiple-empty-lines': 'warn', // 여러 줄 공백 금지
    'no-nested-ternary': 'warn', // 중첩 삼항 연산자 금지
    'no-console': 'warn', // console.log() 금지
    eqeqeq: 'warn', // 일치 연산자 사용 필수
    'dot-notation': 'warn', // 가능하다면 dot notation 사용
    'no-unused-vars': 'warn', // 사용하지 않는 변수 금지
    'react/destructuring-assignment': 'warn', // state, prop 등에 구조분해 할당 적용
    'react/jsx-pascal-case': 'warn', // 컴포넌트 이름은 PascalCase로
    'react/no-direct-mutation-state': 'warn', // state 직접 수정 금지
    'react/jsx-no-useless-fragment': 'warn', // 불필요한 fragment 금지
    'react/no-unused-state': 'warn', // 사용되지 않는 state
    'react/jsx-key': 'warn', // 반복문으로 생성하는 요소에 key 강제
    'react/self-closing-comp': 'warn', // 셀프 클로징 태그 가능하면 적용
    'react/jsx-curly-brace-presence': 'warn', // jsx 내 불필요한 중괄호 금지
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ], //delete 'cr' prettier/prettier 오류를 피하기위해 윈도우 유저에게 필요한 부분
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', '.'],
      },
    },
  },
};