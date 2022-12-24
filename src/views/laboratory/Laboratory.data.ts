import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
import {JVxeTypes,JVxeColumn} from '/@/components/jeecg/JVxeTable/types'
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '图标',
    align:"center",
    dataIndex: 'logo',
    customRender:render.renderImage,
   },
   {
    title: '名称',
    align:"center",
    dataIndex: 'name'
   },
   {
    title: '创建日期',
    align:"center",
    dataIndex: 'createTime'
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
      label: "指导老师",
      field: 'teacher',
    component: 'JPopup',
    componentProps: ({ formActionType }) => {
        const {setFieldsValue} = formActionType;
        return{
            setFieldsValue:setFieldsValue,
            code:"teacher_info",
            fieldConfig: [
                { source: 'id', target: 'teacher' },
                { source: 'name', target: 'teacherName' },
            ],
            multi:false
        }
    },

      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '图标',
    field: 'logo',
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
    label: '描述',
    field: 'des',
    component: 'JEditor',
  },
  {
    label: '指导老师',
    field: 'teacher',
    component: 'JPopup',
    componentProps: ({ formActionType }) => {
        const {setFieldsValue} = formActionType;
        return{
            setFieldsValue:setFieldsValue,
            code:"teacher_info",
            fieldConfig: [
                { source: 'id', target: 'teacher' },
                { source: 'name', target: 'teacherName' },
            ],
            multi:false
        }
    },

    dynamicRules: ({model,schema}) => {
          return [
                 { required: true, message: '请输入指导老师!'},
          ];
     },
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];
//子表单数据
//子表列表数据
export const laboratoryStudentColumns: BasicColumn[] = [
   {
    title: '学号',
    align:"center",
    dataIndex: 'studentNumber'
   },
   {
    title: '添加时间',
    align:"center",
    dataIndex: 'createTime'
   },
];
//子表表格配置
export const laboratoryStudentJVxeColumns: JVxeColumn[] = [
    {
      title: '学号',
      key: 'studentNumber',
      type: JVxeTypes.popup,
      popupCode:"student_info",
      fieldConfig: [
        { source: 'number', target: 'studentNumber' },
        { source: 'name', target: 'studentName' },
      ],

      width:"200px",
      placeholder: '请输入${title}',
      defaultValue:'',
        validateRules: [
          { required: true, message: '${title}不能为空' },
        ],
    },
  ]

/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}