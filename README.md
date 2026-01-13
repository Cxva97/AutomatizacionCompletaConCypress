# Automatización Completa - Cypress

## 📋 Descripción General

Este proyecto es un conjunto de pruebas automatizadas de extremo a extremo (E2E) y pruebas de API desarrolladas con **Cypress**. El proyecto automatiza casos de prueba para la aplicación web del Laboratorio de Testing, incluyendo funcionalidades de autenticación, carrito de compras, órdenes, favoritos y pruebas de API.

### Características principales

- ✅ Pruebas E2E para flujos de autenticación
- ✅ Pruebas de carrito de compras y checkout
- ✅ Pruebas de órdenes y historial de compras
- ✅ Pruebas de favoritos
- ✅ Pruebas de API REST
- ✅ Datos de prueba con fixtures
- ✅ Comandos personalizados reutilizables
- ✅ Soporte para múltiples ambientes (DEV y PROD)

---

## 🔧 Prerequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

- **Node.js** (v14.0.0 o superior) - [Descargar](https://nodejs.org/)
- **npm** (normalmente viene con Node.js) o **yarn**
- **Git** (opcional, para clonar el repositorio)

Puedes verificar que tienes Node.js y npm instalados ejecutando:

```bash
node --version
npm --version
```

---

## 📦 Instalación

### 1. Clonar o descargar el proyecto

```bash
# Clonar el repositorio (si es aplicable)
git clone <URL-del-repositorio>
cd AutomatizacionCompleta
```

### 2. Instalar Cypress y dependencias

```bash
npm install
```

Esto instalará Cypress y todas las dependencias necesarias definidas en el `package.json`, incluyendo:
- **cypress** - Framework de pruebas
- **@faker-js/faker** - Generador de datos ficticios para pruebas

### 3. Verificar la instalación

```bash
npx cypress --version
```

---

## 🚀 Cómo ejecutar el proyecto

### Scripts disponibles

Este proyecto incluye varios scripts en el `package.json` para ejecutar las pruebas de diferentes formas:

#### 1. **UI Mode (Modo interactivo)**

Abre la interfaz gráfica de Cypress donde puedes ver y ejecutar pruebas en tiempo real:

```bash
npm run ui-mode
```

Esto abrirá el Cypress Test Runner en tu navegador predeterminado, permitiéndote:
- Seleccionar archivos de prueba para ejecutar
- Ver la ejecución paso a paso
- Inspeccionar elementos
- Depurar fallos

**Nota:** Este script utiliza el ambiente de **PROD** y requiere una variable de entorno `COOKIE`.

#### 2. **Ejecutar pruebas en DEV**

Ejecuta las pruebas en ambiente de desarrollo con Chrome:

```bash
npm run lab-dev
```

**Características:**
- Ambiente: `dev`
- Navegador: Chrome
- Requiere variable de entorno: `COOKIE`

#### 3. **Ejecutar pruebas en PROD**

Ejecuta las pruebas en ambiente de producción:

```bash
npm run lab-prod
```

**Características:**
- Ambiente: `prod`
- Navegador: Por defecto (Electron)
- Requiere variable de entorno: `COOKIE`

---

## 🔑 Variables de entorno

Los scripts de prueba utilizan una variable de entorno `COOKIE` que debe estar configurada. Puedes establecerla de las siguientes formas:

### En Windows (PowerShell):

```powershell
$env:COOKIE="tu-cookie-aqui"
npm run lab-prod
```

### En Windows (CMD):

```cmd
set COOKIE=tu-cookie-aqui
npm run lab-prod
```

### En macOS/Linux:

```bash
export COOKIE="tu-cookie-aqui"
npm run lab-prod
```

---

## 📁 Estructura del proyecto

```
cypress/
├── e2e/                          # Pruebas end-to-end
│   ├── api/                      # Pruebas de API
│   │   ├── favoritos.cy.js
│   │   ├── login-api.cy.js
│   │   └── orders-api.cy.js
│   ├── auth/                     # Pruebas de autenticación
│   │   ├── login.cy.js
│   │   └── registro.cy.js
│   ├── cart/                     # Pruebas de carrito
│   │   ├── carrito.cy.js
│   │   ├── checkout.cy.js
│   │   └── clear-cart.cy.js
│   ├── favorites/                # Pruebas de favoritos
│   │   └── favoritos.cy.js
│   └── orders/                   # Pruebas de órdenes
│       └── order-history.cy.js
├── fixtures/                     # Datos de prueba
│   ├── checkout.json
│   ├── login.json
│   └── registro.json
├── support/                      # Helpers y configuración
│   ├── e2e.js                    # Configuración global
│   ├── comandos/                 # Comandos personalizados
│   │   ├── cart.js
│   │   ├── checkout.js
│   │   ├── login.js
│   │   └── registro.js
│   └── selectors/                # Selectores de elementos
│       ├── cart-page.js
│       ├── checkout-page.js
│       ├── login-page.js
│       ├── order-page.js
│       └── register-page.js
└── screenshots/                  # Capturas de pantalla (generadas)

cypress.config.js                # Configuración de Cypress
package.json                     # Dependencias y scripts
```

---

## ⚙️ Configuración de Cypress

El archivo `cypress.config.js` contiene la configuración del proyecto:

- **Viewport**: 1111x691 píxeles
- **Base URL**: `https://www.laboratoriodetesting.com/`
- **Reintentos**: 1 intento en modo abierto y 1 en modo de ejecución

---

## 📝 Buenas prácticas utilizadas

Este proyecto implementa las siguientes buenas prácticas:

✅ **Separación de selectores** - Selectores centralizados en archivos separados  
✅ **Comandos reutilizables** - Lógica común encapsulada en comandos personalizados  
✅ **Fixtures de datos** - Datos de prueba centralizados en archivos JSON  
✅ **Organización de pruebas** - Tests organizadas por funcionalidad  
✅ **Soporte multi-ambiente** - Scripts para DEV y PROD  
✅ **Reintentos automáticos** - Configuración de reintentos para mayor estabilidad  

---

## 🐛 Solución de problemas

### Cypress no se abre

```bash
npx cypress install
```

### Error de permisos en Windows

Ejecuta PowerShell como administrador y luego ejecuta los scripts.

### Cookie expirada

Asegúrate de que la variable de entorno `COOKIE` contiene una cookie válida y no expirada.

---

## 👤 Autor

**Cesar Villacis**

---

## 📄 Licencia

ISC

---

## 📞 Soporte

Para más información sobre Cypress, visita la [documentación oficial](https://docs.cypress.io/).
