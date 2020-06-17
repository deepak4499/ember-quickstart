import { helper } from '@ember/component/helper';

export default helper(function myHelper(params,{opt1,opt2}) {
  console.log(opt1);
  console.log(opt2);
});
