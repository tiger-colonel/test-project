/*
 * @Description:
 * @Author: zhaocheng.zhai
 * @Date: 2021-09-04 14:39:39
 * @LastEditTime: 2021-09-04 17:53:54
 * @LastEditors: zhaocheng.zhai
 */
import { useState } from 'react';
import { Modal, Form, Input, message } from 'antd';
import { addProject } from '@/services/index';

let initialParams = {
  name: '',
  gitUrl: '',
  shellCmd: '',
  publicPath: {},
  dev: '',
  test: '',
  gray: '',
  prod: '',
};

interface ProjectProps {
  projectInfo: { [key: string]: any };
  visible: boolean;
  setVisible: Function;
  getAll: Function;
}

const AddProject = (props: ProjectProps) => {
  const { projectInfo, visible, setVisible, getAll } = props;

  const { publicPath } = projectInfo;
  initialParams = { ...initialParams, ...publicPath, ...projectInfo };
  console.log('%c [ initialParams ]', 'font-size:13px; background:pink; color:#bf2c9f;', initialParams);

  const [form] = Form.useForm();

  const handleOk = async () => {
    const params = { ...form.getFieldsValue() };
    const publicPath: { [key: string]: string } = {};
    ['dev', 'test', 'gray', 'prod'].forEach((key) => {
      publicPath[key] = params[key];
      delete params[key];
    });
    const res = await addProject({ ...params, publicPath });
    if (res.code === 0) {
      message.success('新增成功');
      setVisible(false);
      form.resetFields();
      getAll();
    } else {
      message.error(res.message);
    }

    console.log(res, 'res');
  };
  const handleCancel = () => {
    setVisible(false);
    form.resetFields();
  };
  const [confirmLoading, setLoading] = useState<boolean>(false);
  return (
    <Modal title="新增项目" visible={visible} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
      <Form form={form} initialValues={initialParams} labelCol={{ span: 4 }}>
        <Form.Item label="项目名称" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="gitUrl" name="gitUrl">
          <Input />
        </Form.Item>
        <Form.Item label="构建命令" name="shellCmd">
          <Input />
        </Form.Item>
        <Form.Item label="不同环境访问地址" labelCol={{ span: 8 }} />
        <Form.Item label="dev" name="dev">
          <Input />
        </Form.Item>
        <Form.Item label="test" name="test">
          <Input />
        </Form.Item>
        <Form.Item label="gray" name="gray">
          <Input />
        </Form.Item>
        <Form.Item label="prod" name="prod">
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddProject;
