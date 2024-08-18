export const getPageTitle = (title?: string) => {
  const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME as string;
  return title ? `${title} | ${PROJECT_NAME}` : `${PROJECT_NAME}`;
};

export const getFormData = (data: Record<string, any>) => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => formData.append(key, data[key]));
  return formData;
};

export const getURLWithFilterParams = (
  url: string,
  filters: Record<string, any>
) => {
  const params = convertToSearchParams(filters);
  if (!params.toString()) return url;
  return `${url}?${params.toString()}`;
};

export const convertToSearchParams = (filters: Record<string, any>) => {
  Object.keys(filters).forEach(
    (key) =>
      (filters[key] === null || filters[key] === "") && delete filters[key]
  );
  return new URLSearchParams(filters);
};

export const formatDate = (date: string, withTime: boolean = false) => {
  return withTime
    ? new Date(date).toLocaleString()
    : new Date(date).toLocaleDateString();
};
