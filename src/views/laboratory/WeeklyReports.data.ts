import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '创建人',
    align:"center",
    dataIndex: 'publisher_dictText'
   },
   {
    title: '实验室',
    align:"center",
    dataIndex: 'laboratoryId_dictText'
   },
   {
    title: '创建时间',
    align:"center",
    dataIndex: 'createTime'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "创建人",
      field: 'publisher',
      component: 'JSearchSelect',
      componentProps:{
         dict:"student,name,id"
      },
      colProps: {span: 6},
 	},
	{
      label: "实验室",
      field: 'laboratoryId',
      component: 'JSearchSelect',
      componentProps:{
         dict:"laboratory,name,id"
      },
      colProps: {span: 6},
 	},
     {
      label: "创建时间",
      field: "createTime",
      component: 'RangePicker',
      componentProps: {
          valueType: 'Date',
          showTime:true
      },
      colProps: {span: 6},
	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '创建人',
    field: 'publisher',
    component: 'JSearchSelect',
    componentProps:{
       dict:"student,name,id"
    },
  },
  {
    label: '实验室',
    field: 'laboratoryId',
    component: 'JSearchSelect',
    componentProps:{
       dict:"laboratory,name,id"
    },
  },
  {
    label: '每周总结',
    field: 'weeklySummary',
    component: 'JEditor',
  },
  {
    label: '会议纪要',
    field: 'meetingMinutes',
    component: 'JEditor',
  },
  {
    label: '下周计划',
    field: 'nextWeekPlan',
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