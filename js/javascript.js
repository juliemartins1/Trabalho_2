<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Editor de Páginas HTML</title>
    <link rel="icon" href="data:,">
    <!-- Importação do Bootstrap CSS -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
    <!-- Importação do arquivo CSS personalizado -->
    <link rel="stylesheet" href="./css/style.css">
</head>
<body>
    <h1>Editor de Páginas HTML</h1>
    
    <div class="container">
        <div class="editor-container">
            <div class="tabs">
                <div class="tab active" onclick="switchTab(event, 'header-panel')">Cabeçalho</div>
                <div class="tab" onclick="switchTab(event, 'menu-panel')">Menu</div>
                <div class="tab" onclick="switchTab(event, 'gallery-panel')">Galeria</div>
                <div class="tab" onclick="switchTab(event, 'form-panel')">Formulário</div>
                <div class="tab" onclick="switchTab(event, 'footer-panel')">Rodapé</div>
                <div class="tab" onclick="switchTab(event, 'general-panel')">Geral</div>
            </div>
            
            <!-- Painel do Cabeçalho -->
            <div id="header-panel" class="panel active">
                <h2>Editar Cabeçalho</h2>
                <label>Cor de Fundo do Cabeçalho:</label>
                <div class="color-picker-container">
                    <input type="color" id="headerBgColor" value="#f8f8f8" onchange="updateHeaderStyle()">
                    <span id="headerBgColorValue">#f8f8f8</span>
                </div>
                
                <div id="header-elements">
                    <!-- Elementos do cabeçalho serão adicionados aqui -->
                </div>
                
                <button onclick="addHeaderElement()">Adicionar Elemento</button>
            </div>
            
            <!-- Painel do Menu -->
            <div id="menu-panel" class="panel">
                <h2>Editar Menu</h2>
                <label>Cor de Fundo do Menu:</label>
                <div class="color-picker-container">
                    <input type="color" id="menuBgColor" value="#333333" onchange="updateMenuStyle()">
                    <span id="menuBgColorValue">#333333</span>
                </div>
                
                <label>Cor do Texto do Menu:</label>
                <div class="color-picker-container">
                    <input type="color" id="menuTextColor" value="#ffffff" onchange="updateMenuStyle()">
                    <span id="menuTextColorValue">#ffffff</span>
                </div>
                
                <label>Cor de Fundo dos Itens:</label>
                <div class="color-picker-container">
                    <input type="color" id="menuItemBgColor" value="#444444" onchange="updateMenuStyle()">
                    <span id="menuItemBgColorValue">#444444</span>
                </div>
                
                <label>Adicionar Logo ao Menu:</label>
                <input type="file" id="menuLogo" accept="image/*" onchange="handleMenuLogoUpload()">
                <div id="menuLogoPreview" class="image-placeholder">Logo do Menu</div>
                
                <label>Tamanho do Logo:</label>
                <div class="flex-container">
                    <div>
                        <label for="menuLogoWidth">Largura:</label>
                        <input type="number" id="menuLogoWidth" value="50" min="20" max="200" onchange="updateMenuStyle()">
                    </div>
                    <div>
                        <label for="menuLogoHeight">Altura:</label>
                        <input type="number" id="menuLogoHeight" value="50" min="20" max="200" onchange="updateMenuStyle()">
                    </div>
                </div>
                
                <h3>Itens do Menu</h3>
                <div id="menu-items">
                    <!-- Itens do menu serão adicionados aqui -->
                </div>
                
                <button onclick="addMenuItem()">Adicionar Item de Menu</button>
            </div>
            
            <!-- Painel da Galeria -->
            <div id="gallery-panel" class="panel">
                <h2>Editar Galeria</h2>
                <label>Cor de Fundo da Galeria:</label>
                <div class="color-picker-container">
                    <input type="color" id="galleryBgColor" value="#f0f0f0" onchange="updateGalleryStyle()">
                    <span id="galleryBgColorValue">#f0f0f0</span>
                </div>
                
                <label>Colunas por Linha:</label>
                <input type="number" id="galleryColumns" value="3" min="1" max="4" onchange="updateGalleryStyle()">
                
                <h3>Cards da Galeria</h3>
                <div id="gallery-items">
                    <!-- Cards da galeria serão adicionados aqui -->
                </div>
                
                <button onclick="addGalleryItem()">Adicionar Card</button>
            </div>
            
            <!-- Painel do Formulário -->
            <div id="form-panel" class="panel">
                <h2>Editar Formulário</h2>
                <label>Título do Formulário:</label>
                <input type="text" id="formTitle" value="Entre em Contato" onchange="updateFormStyle()">
                
                <label>Cor de Fundo do Formulário:</label>
                <div class="color-picker-container">
                    <input type="color" id="formBgColor" value="#f8f8f8" onchange="updateFormStyle()">
                    <span id="formBgColorValue">#f8f8f8</span>
                </div>
                
                <label>Cor da Borda do Formulário:</label>
                <div class="color-picker-container">
                    <input type="color" id="formBorderColor" value="#dddddd" onchange="updateFormStyle()">
                    <span id="formBorderColorValue">#dddddd</span>
                </div>
                
                <h3>Campos do Formulário</h3>
                <div id="form-fields">
                    <!-- Campos do formulário serão adicionados aqui -->
                </div>
                
                <button onclick="addFormField()">Adicionar Campo</button>
            </div>
            
            <!-- Painel do Rodapé -->
            <div id="footer-panel" class="panel">
                <h2>Editar Rodapé</h2>
                <label>Cor de Fundo do Rodapé:</label>
                <div class="color-picker-container">
                    <input type="color" id="footerBgColor" value="#333333" onchange="updateFooterStyle()">
                    <span id="footerBgColorValue">#333333</span>
                </div>
                
                <label>Cor do Texto do Rodapé:</label>
                <div class="color-picker-container">
                    <input type="color" id="footerTextColor" value="#ffffff" onchange="updateFooterStyle()">
                    <span id="footerTextColorValue">#ffffff</span>
                </div>
                
                <label>Texto do Rodapé:</label>
                <textarea id="footerText" rows="3" onchange="updateFooterStyle()">© 2025 Minha Empresa. Todos os direitos reservados.</textarea>
                
                <label>Tamanho da Fonte:</label>
                <input type="number" id="footerFontSize" value="14" min="10" max="24" onchange="updateFooterStyle()">
            </div>
            
            <!-- Painel de Configurações Gerais -->
            <div id="general-panel" class="panel">
                <h2>Configurações Gerais</h2>
                <label>Cor de Fundo da Página:</label>
                <div class="color-picker-container">
                    <input type="color" id="pageBgColor" value="#ffffff" onchange="updateGeneralStyle()">
                    <span id="pageBgColorValue">#ffffff</span>
                </div>
                
                <label>Fonte da Página:</label>
                <select id="pageFont" onchange="updateGeneralStyle()">
                    <option value="Arial, sans-serif">Arial</option>
                    <option value="'Times New Roman', serif">Times New Roman</option>
                    <option value="'Courier New', monospace">Courier New</option>
                    <option value="Georgia, serif">Georgia</option>
                    <option value="Verdana, sans-serif">Verdana</option>
                </select>
                
                <div class="button-group">
                    <button onclick="showGeneratedCode()">Mostrar Código HTML</button>
                    <button onclick="saveToLocalStorage()">Salvar no LocalStorage</button>
                    <button onclick="loadFromLocalStorage()">Carregar do LocalStorage</button>
                    <button onclick="clearLocalStorage()" class="remove-btn">Limpar LocalStorage</button>
                </div>
                
                <h3>Código HTML Gerado</h3>
                <textarea id="generatedCode" readonly></textarea>
            </div>
        </div>
        
        <div class="preview-container">
            <h2>Visualização da Página</h2>
            <div id="preview"></div>
        </div>
    </div>
    
    <script src="./javascript/javascript.js"></script>
</body>
</html>
