export function asyncErrorBoundary(fn) {
  return async function handler(params) {
    try {
      const response = await fn(params);

      if (
        response.data &&
        response.data.success === false &&
        response.data.error
      ) {
        return alert("요청에 실패했습니다.");
      }

      return response.data;
    } catch (e) {
      alert(`요청 중 오류가 발생했습니다 \n ${e}`);
    }
  };
}
