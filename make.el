;;; make.el --- Build script for the website  -*- lexical-binding: t; -*-

;;; Commentary:
;; Script to build the website.

(require 'ob-core)
;; Not required but do it just in case.
(require 'files)

;;; Code:

(let ((org-confirm-babel-evaluate nil)
	  (make-backup-files nil)
	  (gc-cons-threshold 402653184)
	  (gc-cons-percentage 0.6))
  (org-babel-load-file "publish.org"))

;;; make.el ends here
