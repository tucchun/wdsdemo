// export default function print () {
//   console.log(1111)
// }
export default function print () {
  console.log('I get called from print.js!')
}

if (module.hot) {
  // module.hot.accept(args => {
  //   console.log('hot', args)
  // })
}