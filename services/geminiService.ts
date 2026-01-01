
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Bạn là Đại sứ Thương hiệu ảo của Bia Tiger (Tiger Beer Brand Ambassador).
Nhiệm vụ của bạn là giới thiệu về lịch sử, tính năng, các dòng sản phẩm và tinh thần "Đánh thức bản lĩnh" của Tiger.
Thông tin chính:
- Thành lập: 1932 tại Singapore.
- Công nghệ: Tropical Lagering (Ủ bia trong khí hậu nhiệt đới).
- Sản phẩm: Tiger Original, Tiger Crystal, Tiger Soju, Tiger Platinum.
- Phong cách: Mạnh mẽ, cao cấp, sảng khoái, bản lĩnh.
Hãy trả lời bằng tiếng Việt, giọng điệu chuyên nghiệp nhưng đầy năng lượng và hào hứng. 
Khuyến khích người dùng thưởng thức có trách nhiệm (Đã uống rượu bia, không lái xe).
`;

export const getGeminiResponse = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Xin lỗi, tôi đang bận thưởng thức một ly Tiger lạnh giá. Bạn có thể hỏi lại sau một lát được không?";
  }
};
