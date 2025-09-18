import React, { useState, useRef } from 'react';
import {
  Box,
  Button,
  Typography,
  IconButton,
  Chip,
  Alert,
} from '@mui/material';
import {
  CloudUpload,
  AttachFile,
  Delete,
  PictureAsPdf,
} from '@mui/icons-material';
import { formatFileSize, getPDFFileError } from '../../utils/helpers';

interface FileUploadProps {
  label: string;
  accept?: string;
  maxSize?: number; // en bytes
  currentFile?: string;
  onFileChange: (file: File | null) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  accept = '.pdf',
  maxSize = 5 * 1024 * 1024, // 5MB por defecto
  currentFile,
  onFileChange,
  error,
  disabled = false,
  required = false,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploadError(null);

    // Validar archivo
    const validationError = getPDFFileError(file);
    if (validationError) {
      setUploadError(validationError);
      return;
    }

    if (file.size > maxSize) {
      setUploadError(`El archivo no puede superar ${formatFileSize(maxSize)}`);
      return;
    }

    setSelectedFile(file);
    onFileChange(file);
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    onFileChange(null);
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const displayError = error || uploadError;
  const hasFile = selectedFile || currentFile;

  return (
    <Box>
      <Typography variant="body2" color="text.secondary" gutterBottom>
        {label} {required && <span style={{ color: 'red' }}>*</span>}
      </Typography>

      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        style={{ display: 'none' }}
        disabled={disabled}
      />

      <Box
        sx={{
          border: '2px dashed',
          borderColor: displayError ? 'error.main' : 'grey.300',
          borderRadius: 2,
          p: 2,
          textAlign: 'center',
          backgroundColor: disabled ? 'grey.50' : 'transparent',
          cursor: disabled ? 'not-allowed' : 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': {
            borderColor: disabled ? 'grey.300' : 'primary.main',
            backgroundColor: disabled ? 'grey.50' : 'primary.50',
          },
        }}
        onClick={!disabled ? handleButtonClick : undefined}
      >
        {hasFile ? (
          <Box>
            <Box display="flex" alignItems="center" justifyContent="center" mb={1}>
              <PictureAsPdf color="error" sx={{ mr: 1 }} />
              <Typography variant="body2" noWrap>
                {selectedFile?.name || currentFile}
              </Typography>
              {!disabled && (
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveFile();
                  }}
                  sx={{ ml: 1 }}
                >
                  <Delete fontSize="small" />
                </IconButton>
              )}
            </Box>
            {selectedFile && (
              <Chip
                label={formatFileSize(selectedFile.size)}
                size="small"
                color="primary"
                variant="outlined"
              />
            )}
          </Box>
        ) : (
          <Box>
            <CloudUpload
              sx={{
                fontSize: 48,
                color: 'grey.400',
                mb: 1,
              }}
            />
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Haz clic para seleccionar un archivo PDF
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Tamaño máximo: {formatFileSize(maxSize)}
            </Typography>
            <Box mt={1}>
              <Button
                variant="outlined"
                startIcon={<AttachFile />}
                size="small"
                disabled={disabled}
              >
                Seleccionar archivo
              </Button>
            </Box>
          </Box>
        )}
      </Box>

      {displayError && (
        <Alert severity="error" sx={{ mt: 1 }}>
          {displayError}
        </Alert>
      )}

      <Typography variant="caption" color="text.secondary" display="block" mt={1}>
        Solo se permiten archivos PDF de hasta {formatFileSize(maxSize)}
      </Typography>
    </Box>
  );
};

export default FileUpload;