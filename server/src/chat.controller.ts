import { Controller, Post, Body } from '@nestjs/common'
import axios from 'axios'

@Controller('chat')
export class ChatController {
  @Post()
  async chat(@Body() body: { prompt: string; url: string }) {
    try {
      const res = await axios.post(body.url, { prompt: body.prompt })
      console.log('res.data', res.data)
      return {
        response: res.data.choices && res.data.choices.length > 0 ? res.data.choices[0].text : '응답을 가져오는 중 오류가 발생했습니다.'
      }
    } catch (error) {
      console.error(error)
      return { response: 'GPT 모델에서 응답을 가져오는 중 오류가 발생했습니다.' }
    }
  }
}
