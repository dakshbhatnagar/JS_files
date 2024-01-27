// Function to delete Unnecessary Spam emails automatically from your Gmail Inbox

function deleteThreads() {
  // Define labels to search for
  let labels = ['Social', 'Promotions', 'Forums'];

  // Loop through each label
  for (let i = 0; i < labels.length; i++) {
    // Search for threads with the specified label
    let threads = GmailApp.search(`category:${labels[i]}`);

    // Loop through the threads and move them to trash
    for (let j = 0; j < threads.length; j++) {
      threads[j].moveToTrash();
    }
  }

  // Move threads from trash to archive
  let trashThreads = GmailApp.getTrashThreads();
  for (let k = 0; k < trashThreads.length; k++) {
    let thread = trashThreads[k];
    thread.moveToArchive();
  }
}
