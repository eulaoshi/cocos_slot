# cocos_slot
slot練習

成果展示
https://eulaoshi.github.io/slotM

1.目標
    完成三條滾動的拉霸機

2.實現步驟

    1.布局頁面節點
    2.點擊搖桿開始遊戲滾動
    3.遊戲開始撥放音效
    4.中獎彈出分數與中獎音效
    5.繼續遊戲

3.實現邏輯
    
    1.頁面布局
        1.節點布置使用layout組件垂直排列一次完整滾動所需要的圖片
        2.使用Mask組件將圖片顯示限制在拉霸機顯示區域中
    
    2.滾動邏輯
        1.每一次滾動需要20張圖片，第一次遊戲剛開始的畫面需要一張，第二次遊戲後的需要前一次遊戲的最後一張，
          所以每一次需要動態生成19張圖。
        2.使用陣列保存每一次滾動生成的所有圖(20張)，下一次遊戲開始前清除前面19張，留下最後一組數據。其餘的都從layout節點刪除。
        3.將圖做成預制體，每次隨機生成插入layout節點
        4.緩動使用sineInOut(慢->快->慢)作為軌跡

    3.中獎邏輯
        1.判斷陣列保存的圖最後一張是否相同，如果相同就中獎，但是要等滾動結束才顯示中獎彈出框

    4.繼續遊戲
        1.中獎彈出框點擊"繼續遊戲"按鈕隱藏彈出框

