type ClientType = 'app';

type ResultCode = 'M0000' | 'M5001';

interface BasicResult<T = BasicObject> {
  code: string | ResultCode;
  ctime: number;
  data: T | null | undefined;
  message: string;
  requestId: string;
}
