# 🚀 AS CODE - دليل المطور

## �‍💻 تم التطوير بواسطة
### 🌟 ADAM STUDIO
استوديو متخصص في تطوير أدوات برمجية عصرية وعالية الأداء

📱 **زيارة البورتفوليو**: [adam-studio-platform.wasmer.app](https://adam-studio-platform.wasmer.app)

---

## �📋 جدول المحتويات

1. [الهيكل](#الهيكل)
2. [البدء السريع](#البدء-السريع)
3. [البنية المعمارية](#البنية-المعمارية)
4. [التطوير](#التطوير)
5. [الاختبارات](#الاختبارات)
6. [النشر](#النشر)

## 🏗️ الهيكل

```
as-code/
├── src/
│   ├── main.ts                 # نقطة دخول Electron
│   ├── app.ts                  # التطبيق الرئيسي
│   ├── editor.ts               # محرك المحرر
│   ├── ai-assistant.ts         # مساعد AI
│   ├── performance.ts          # تحسينات الأداء
│   ├── collaboration.ts        # مميزات التعاون
│   ├── language-server.ts      # بروتوكول خادم اللغة
│   ├── theme-engine.ts         # محرك المظاهر
│   ├── extension-api.ts        # واجهة الإضافات
│   └── keybindings.ts          # الاختصارات
├── extensions/                 # مجلد الإضافات
│   ├── example-extension/
│   └── ...
├── packages/                   # الحزم المشتركة
├── build/                      # سكريبتات البناء
├── dist/                       # الملفات المجمعة
├── index.html                  # صفحة HTML الرئيسية
├── package.json                # المعتمدات
├── tsconfig.json               # إعدادات TypeScript
└── webpack.config.js           # إعدادات Webpack
```

## 🚀 البدء السريع

### التثبيت الأولي

```bash
cd /workspaces/AS-VISUAL-STUDIO-CODE/as-code

# تثبيت المعتمدات
npm install

# التحقق من التثبيت
npm run compile
```

### التطوير

```bash
# بدء التطوير مع Hot Reload
npm run dev

# أو مراقبة الملفات منفصلة
npm run watch

# تشغيل التطبيق
npm run start
```

### البناء

```bash
# بناء النسخة الإنتاجية
npm run build

# بناء الويب
npm run build:web
```

## 🏛️ البنية المعمارية

### Layer 1: تطبيق Electron (Desktop)
- `main.ts`: نقطة دخول التطبيق
- معالجة نوافذ التطبيق
- إدارة IPC (Inter-Process Communication)

### Layer 2: أنوية التطبيق (Core)
- `app.ts`: مركز التطبيق الرئيسي
- تنسيق بين الأنوية المختلفة
- إدارة الحالة العام

### Layer 3: الأنوية الوظيفية (Features)
- **Editor Core** (`editor.ts`): محرك المحرر الأساسي
- **AI Assistant** (`ai-assistant.ts`): معالج الذكاء الاصطناعي
- **Performance** (`performance.ts`): تحسينات الأداء
- **Collaboration** (`collaboration.ts`): نظام التعاون

### Layer 4: خدمات الدعم (Support Services)
- **Language Server** (`language-server.ts`): LSP
- **Theme Engine** (`theme-engine.ts`): إدارة المظاهر
- **Extension API** (`extension-api.ts`): نظام الإضافات
- **KeyBindings** (`keybindings.ts`): الاختصارات

### Layer 5: واجهة المستخدم (UI)
- `index.html`: صفحة HTML الرئيسية
- CSS محسّن ومتجاوب
- JavaScript تفاعلي

## 💻 التطوير

### إضافة ميزة جديدة

1. **إنشاء ملف جديد** في `src/`:
```typescript
export class NewFeature {
  constructor() {
    // initialization
  }

  public async execute(): Promise<void> {
    // implementation
  }
}
```

2. **إضافة إلى التطبيق الرئيسي** في `app.ts`:
```typescript
private newFeature: NewFeature;

constructor() {
  // ... existing code ...
  this.newFeature = new NewFeature();
}
```

3. **تصدير من index.ts**:
```typescript
export { NewFeature } from './new-feature';
```

### تطوير إضافة (Extension)

1. **إنشاء مجلد** في `extensions/my-extension/`

2. **إنشاء ملف** `extension.ts`:
```typescript
import { Extension, ExtensionContext } from '../../src/extension-api';

export const activate = (context: ExtensionContext) => {
  console.log('Extension activated');
};

export const deactivate = () => {
  console.log('Extension deactivated');
};

export const myExtension: Extension = {
  id: 'my-extension',
  name: 'My Extension',
  version: '1.0.0',
  description: 'Description',
  author: 'Author Name',
  activate,
  deactivate,
};
```

3. **تسجيل الإضافة**:
```typescript
const app = new ASCodeApplication();
app.registerExtension(myExtension);
app.activateExtension('my-extension');
```

## 🧪 الاختبارات

### تشغيل الاختبارات

```bash
# تشغيل جميع الاختبارات
npm run test

# تشغيل مع المراقبة
npm test -- --watch

# تشغيل مع التغطية
npm test -- --coverage
```

### كتابة اختبار جديد

إنشاء ملف `feature.test.ts`:

```typescript
import { describe, it, expect, beforeEach } from '@jest/globals';
import { MyFeature } from './my-feature';

describe('MyFeature', () => {
  let feature: MyFeature;

  beforeEach(() => {
    feature = new MyFeature();
  });

  it('should initialize correctly', () => {
    expect(feature).toBeDefined();
  });

  it('should execute method', async () => {
    const result = await feature.execute();
    expect(result).toBeTruthy();
  });
});
```

## 🔍 Linting والتنسيق

```bash
# فحص الأكواد
npm run lint

# إصلاح المشاكل تلقائياً
npm run lint -- --fix

# تنسيق الأكواد
npm run format
```

## 📦 النشر

### بناء الملف التنفيذي

```bash
# بناء النسخة الإنتاجية
npm run build

# إنشاء حزمة قابلة للتشغيل
npm run electron:build
```

### النشر على الويب

```bash
# بناء النسخة الويب
npm run build:web

# نشر إلى خادم الاستضافة
npm run deploy
```

## 🐛 تصحيح الأخطاء

### استخدام DevTools في Electron

```typescript
// في main.ts
if (process.env.NODE_ENV === 'development') {
  mainWindow.webContents.openDevTools();
}
```

### تسجيل الأخطاء

```typescript
console.log('📝 Info:', message);
console.warn('⚠️ Warning:', message);
console.error('❌ Error:', error);
```

## 📚 المراجع

- [Electron Documentation](https://www.electronjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Webpack Documentation](https://webpack.js.org/concepts/)
- [Jest Testing](https://jestjs.io/docs/getting-started)

## 🤝 المساهمة

1. Fork المستودع
2. إنشاء فرع جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add AmazingFeature'`)
4. Push إلى الفرع (`git push origin feature/AmazingFeature`)
5. فتح Pull Request

## 📞 الدعم

للمساعدة والأسئلة:
- 📧 Email: dev@ascode.dev
- 💬 Discord: [رابط السيرفر]
- 🐛 Issues: [GitHub Issues](https://github.com/panzasheko-design/AS-VISUAL-STUDIO-CODE/issues)

---

**Happy Coding! 🚀**
