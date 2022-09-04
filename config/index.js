export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "wx48993f30870a578a",

  // 公众号APP_SECRET
  APP_SECRET: "1fad8e8bd319582d7909bdf7d5e35f41",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [oZPn456WzJwCDb81ovHWxPmrad6A
   *  
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "梁萱",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oZPn456WzJwCDb81ovHWxPmrad6A",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "9nqmHucU6eEyetDOo4V48PBoGRwmxZhr4eQAcA0a34A",
      // 所在省份
      province: "天津",
      // 所在城市
      city: "蓟州区",
      
    }, 
    
    

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "9nqmHucU6eEyetDOo4V48PBoGRwmxZhr4eQAcA0a34A",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "吴茂彰",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oZPn456WzJwCDb81ovHWxPmrad6A",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "天津",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "蓟州区",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"节日": "中秋节", "梁萱": "老婆", "year": "2022", "date": "09-02"},
   
  ],

  


}
