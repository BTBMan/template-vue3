import { AxiosResponse } from 'axios';
import { message } from 'ant-design-vue';
import { parseFormString } from '@/utils';

export function handleBlob(res: AxiosResponse<Blob>) {
  const { data, headers } = res;
  const fileReader = new FileReader();

  const { filename } = parseFormString(headers['content-disposition'] || '');

  fileReader.onload = (e: any) => {
    const { result } = e.target;

    try {
      const jsonData = JSON.parse(result);

      if (jsonData.status !== 200 && jsonData.code !== 'M0000') {
        message.error('导出失败!');
      }
    } catch (error) {
      const blob = new Blob([data], {
        type: 'application/vnd.ms-excel',
      });
      const href = window.URL.createObjectURL(blob);
      const downloadElement = document.createElement('a');
      downloadElement.href = href;
      downloadElement.download = decodeURI(filename);
      downloadElement.click();
      window.URL.revokeObjectURL(href);
    }
  };

  fileReader.readAsText(data);
}
