import { useState } from "react";
import { BsQuestionCircle } from "react-icons/bs";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import "./info-style.css";

export function Info() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        className="infoButton"
        aria-label="Open information dialog"
        onClick={handleOpen}
      >
        <BsQuestionCircle />
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="sketchforge-info-dialog"
        PaperProps={{
          style: {
            borderRadius: "10px",
          },
        }}
      >
        <DialogTitle
          id="sketchforge-info-dialog"
          sx={{ m: 0, p: 2 }}
          className="DialogTitle"
        >
          How to Use SketchForge
        </DialogTitle>

        <IconButton
          aria-label="Close dialog"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
          className="IconButton"
        >
          <CloseIcon className="CloseIcon" />
        </IconButton>

        <div className="infoContent">
          <Typography paragraph>
            Welcome to <strong>SketchForge</strong> — a powerful and intuitive
            digital sketching tool designed to help you visualize ideas quickly
            and efficiently.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Getting Started
          </Typography>

          <ul>
            <li>
              <strong>Select a Tool:</strong> Choose from pencil, line,
              rectangle, or text tools to begin drawing.
            </li>
            <li>
              <strong>Draw & Move Elements:</strong> Click and drag on the canvas
              to draw. Select any element to reposition it freely.
            </li>
            <li>
              <strong>Edit Text:</strong> Activate the text tool and click on the
              canvas to start typing.
            </li>
            <li>
              <strong>Zoom:</strong> Use <strong>Ctrl + Mouse Scroll</strong> to
              zoom in and out of the canvas.
            </li>
            <li>
              <strong>Pan:</strong> Hold the <strong>Spacebar</strong> and drag,
              or use the middle mouse button to move around the canvas.
            </li>
          </ul>

          <Typography variant="h6" gutterBottom>
            Keyboard Shortcuts
          </Typography>

          <ul>
            <li>
              <strong>Undo:</strong> Ctrl + Z
            </li>
            <li>
              <strong>Redo:</strong> Ctrl + Y or Ctrl + Shift + Z
            </li>
            <li>
              <strong>Zoom In:</strong> Ctrl + +
            </li>
            <li>
              <strong>Zoom Out:</strong> Ctrl + −
            </li>
          </ul>

          <Typography paragraph>
            Start exploring and bring your ideas to life with SketchForge. Happy
            sketching!
          </Typography>
        </div>
      </Dialog>
    </div>
  );
}

