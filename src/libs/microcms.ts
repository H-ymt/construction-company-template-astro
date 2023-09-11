import { createClient } from "microcms-js-sdk";
import type { MicroCMSImage, MicroCMSQueries } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

// ニュースの型定義
export type News = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  category: string;
};

export type NewsResponse = {
  offset: number;
  limit: number;
  contents: News[];
};

// 施工実績の型定義
export type Works = {
  id: string;
  thumbnail?: MicroCMSImage;
  title: string;
  body: string;
  date: string;
};

export type WorksResponse = {
  offset: number;
  limit: number;
  contents: Works[];
};

// ニュースの一覧を取得
export const getNews = async (queries?: MicroCMSQueries) => {
  return await client.get<NewsResponse>({ endpoint: "news", queries });
};

// 施工実績の一覧を取得
export const getWorks = async (queries?: MicroCMSQueries) => {
  return await client.get<WorksResponse>({ endpoint: "works", queries });
};

// ニュースの詳細を取得
export const getNewsDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<News>({
    endpoint: "news",
    contentId,
    queries,
  });
};

// 施工実績の詳細を取得
export const getWorksDetail = async (
  contentId: string,
  queries?: MicroCMSQueries,
) => {
  return await client.getListDetail<Works>({
    endpoint: "works",
    contentId,
    queries,
  });
};
