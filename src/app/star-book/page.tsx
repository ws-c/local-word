'use client'
import useGetStarList from '@/hooks/useGetStarList'
import './index.css'
import { word } from '@/types/word'
import { List, Pagination, Spin } from 'antd' // 引入 Spin 组件来显示加载状态
import { useCallback, useEffect, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import Link from 'next/link'

export default function StarBook() {
  const [wordList, setWordList] = useState<word[]>()
  const { fetchStarList } = useGetStarList()
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true) // 添加 loading 状态

  // 获取收藏单词总数
  const getSun = async () => {
    const response = await fetch(`/apis/starList/getStarListSum`)
    const res = await response.json()
    setTotal(res.data[0].count)
  }

  useEffect(() => {
    getSun()
  }, [])

  // 获取收藏单词列表
  const getWordList = useCallback(async () => {
    const res = await fetchStarList(currentPage)
    setWordList(res)
    setLoading(false) // 数据加载完成后设置 loading 状态为 false
  }, [currentPage, fetchStarList])

  useEffect(() => {
    getWordList()
  }, [currentPage, getWordList])

  // 分页
  const onChange = (page: number) => {
    setCurrentPage(page)
  }

  // 删除单项数据
  const deleteItem = (id: number) => {
    fetch(`/apis/delStar?id=${id}`)
    getWordList()
    getSun()
  }

  return (
    <div className="star-book">
      <div className="star-book-header">
        <span>收藏单词本</span>
        <Link href="/">
          <CloseOutlined className="star-book-close" />
        </Link>
      </div>
      {loading ? ( // 根据 loading 状态来决定是否显示加载状态
        <div className="Spin">
          <Spin size='large'/>
        </div>
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={wordList}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <div
                  className="star-book-delete"
                  key={item.id}
                  onClick={() => deleteItem(item.id)}
                >
                  删除
                </div>,
              ]}
            >
              <List.Item.Meta
                title={
                  <div className="star-book-title">
                    <span>{index + 1}.</span> <span>{item.cet4_word}</span>
                  </div>
                }
                description={
                  <p className="star-book-description">{item.cet4_translate}</p>
                }
              />
            </List.Item>
          )}
        />
      )}
      {!loading && ( // 根据 loading 状态来决定是否显示分页组件
        <Pagination
          onChange={onChange}
          defaultPageSize={7}
          defaultCurrent={1}
          total={total}
          hideOnSinglePage={true}
        />
      )}
    </div>
  )
}