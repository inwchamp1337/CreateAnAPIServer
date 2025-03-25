# เลือก image พื้นฐานจาก Node.js
FROM node

# ตั้ง Working Directory ใน container
WORKDIR /app

# คัดลอก package.json และ package-lock.json ไปยัง container
COPY package*.json ./

# ติดตั้ง dependencies
RUN npm install

# คัดลอกไฟล์ทั้งหมดจาก project ไปยัง container
COPY . .

# เปิดพอร์ตที่แอปจะใช้ (ในที่นี้คือ 3000)
EXPOSE 3000

# คำสั่งที่ใช้ในการรันแอป
CMD ["npm", "start"]

#yeseer