EMACS_FLAGS = -Q

.PHONY: build all install-org clean

build:
	emacs $(EMACS_FLAGS) --script make.el

all: install-org build

install-org:
	emacs $(EMACS_FLAGS) --script install-org.el

clean:
	rm -rf build/
	rm -f publish.el
