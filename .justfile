set dotenv-load := true

alias i := install
alias p := pre_commit


install:
    #!/usr/bin/env bash
    echo "🚀 Setting up development environment..."

    # Install Node.js dependencies
    echo "📦 Installing Node.js dependencies..."
    npm install

    # Install pre-commit hooks
    echo "🔧 Installing pre-commit hooks..."
    pip install pre-commit
    pre-commit install



pre_commit:
    #!/usr/bin/env bash
    echo "🔍 Running pre-commit checks on all files..."
    pre-commit run --all-files
