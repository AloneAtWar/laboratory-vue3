import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '头像',
    align:"center",
    dataIndex: 'avatar',
    customRender:render.renderImage,
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '电话',
    align:"center",
    dataIndex: 'phone'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "名称",
      field: 'name',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "电话",
      field: 'phone',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '头像',
    field: 'avatar',
     component: 'JImageUpload',
     componentProps:{
        fileMax:1
      },
  },
  {
    label: '名称',
    field: 'name',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入名称!'},
          ];
     },
  },
  {
    label: '密码',
    field: 'password',
    component: 'InputPassword',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入密码!'},
          ];
     },
  },
  {
    label: '电话',
    field: 'phone',
    component: 'Input',
    dynamicRules: ({model,schema}) => {
          return [
                 { required: false},
                 { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号码!'},
          ];
     },
  },
  {
    label: '个人介绍',
    field: 'introduce',
    component: 'JEditor',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}